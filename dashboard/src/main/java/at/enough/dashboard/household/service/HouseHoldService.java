package at.enough.dashboard.household.service;

import at.enough.dashboard.budget.persistence.model.Expense;
import at.enough.dashboard.budget.persistence.model.ExpenseCategory;
import at.enough.dashboard.budget.persistence.repository.ExpenseCategoryRepository;
import at.enough.dashboard.budget.persistence.repository.ExpenseRepository;
import at.enough.dashboard.household.persistence.Household;
import at.enough.dashboard.household.persistence.HouseholdRepository;
import at.enough.dashboard.user.model.AppUser;
import at.enough.dashboard.user.service.AppUserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class HouseHoldService {

    private final HouseholdRepository householdRepository;
    private final AppUserService appUserService;
    private final ExpenseRepository expenseRepository;
    private final ExpenseCategoryRepository expenseCategoryRepository;

    public Household getHouseHoldBy(String userIdentifier) {
        AppUser appUser = appUserService.getAppUserBy(userIdentifier);
        return appUser.getHousehold();
    }

    public List<Household> getAll() {
        return householdRepository.findAll();
    }


    public List<Expense> getUsersHouseHoldExpenses(String userName, int timeSpan) {
        Household usersHouseHold = getHouseHoldBy(userName);
        List<Expense> expenses = usersHouseHold.getExpenses();
        log.info("expenses = " + expenses);
        return expenses;

    }

    public Expense addExpenseToUsersHousehold(String userName, Expense expense) {
        Household userHousehold = getHouseHoldBy(userName);


        userHousehold.getExpenses().add(expense);
        Expense persistedExpense = expenseRepository.save(expense);
        householdRepository.save(userHousehold);
        return persistedExpense;
    }

    //todo Add exception to Controller Advice
    public void deleteExpenseFromUsersHouseHold(String userName, Long expenseId) {
        Household userHousehold = getHouseHoldBy(userName);
        Expense expenseToRemove = expenseRepository.findById(expenseId).orElseThrow();
        log.info("deleted expense: " + expenseToRemove);
        userHousehold.getExpenses().remove(expenseToRemove);
        householdRepository.save(userHousehold);
    }


    public Map<String, Double> getUsersHouseHoldChart(String userName, int timeSpan) {
        return getUsersHouseHoldExpenses(userName, timeSpan).stream()
                .collect(Collectors.groupingBy(expense -> expense.getCategory().getName(),
                        Collectors.summingDouble(Expense::getCost)));
    }

    public List<String> getUsersHouseHoldExpenseCategories(String userName) {
        Household userHousehold = getHouseHoldBy(userName);
        return householdRepository.getHouseholdExpenseCategoryNames(userHousehold);
    }

    //todo implement findexpenseCategory @Household jpa, when creating new Expense, check for expenseCategory, if not
    // existing, create new category
    //implement frontend form for entering data.
    private Optional<ExpenseCategory> findExpenseCategoryInUserHouseHold(String userName,
                                                                           String categoryName) {
        return null;
    }


    /*public List<String> getUsersHouseHoldExpenseCategories(String userName) {
        Household userHousehold = getHouseHoldBy(userName);
        List<Expense> expenses = userHousehold.getExpenses();
        return expenses.stream()
                .map(expense -> expense.getCategory().getName())
                .distinct()
                .sorted()
                .toList();
    }*/
}
