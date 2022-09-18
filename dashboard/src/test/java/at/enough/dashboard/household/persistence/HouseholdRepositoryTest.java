package at.enough.dashboard.household.persistence;

import at.enough.dashboard.budget.persistence.model.Expense;
import at.enough.dashboard.budget.persistence.model.ExpenseCategory;
import at.enough.dashboard.budget.persistence.repository.ExpenseCategoryRepository;
import at.enough.dashboard.budget.persistence.repository.ExpenseRepository;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@DataJpaTest
class HouseholdRepositoryTest {

    @Autowired
    HouseholdRepository householdRepository;

    @Autowired
    ExpenseRepository expenseRepository;

    @Autowired
    ExpenseCategoryRepository expenseCategoryRepository;

    @Test
    void addingHouseHoldSucceed() {
        Household newHousehold = Household.builder()
                .name("new household")
                .build();

        Household result = householdRepository.save(newHousehold);
        Assertions.assertTrue(result.getId() > 0);

    }

    @Test
    void addingExpenseToHouseHoldSucceed() {
        Household newHousehold = Household.builder()
                .name("new household")
                .expenses(new ArrayList<>())
                .build();
        householdRepository.save(newHousehold);
        Expense newExpense = Expense.builder()
                .name("new expense")
                .build();
        newHousehold.getExpenses().add(newExpense);
        Long expenseId = expenseRepository.save(newExpense).getId();
        householdRepository.save(newHousehold);

        Expense persistedExpense = newHousehold.getExpenses().stream().findFirst().orElseThrow();
        Assertions.assertTrue(expenseRepository.findById(persistedExpense.getId()).isPresent());

        Household persistedHousehold = householdRepository.findById(newHousehold.getId()).orElseThrow();
        Expense persistedExpenseFromHousehold = persistedHousehold.getExpenses().stream().findFirst().orElseThrow();
        Assertions.assertEquals(expenseId, persistedExpenseFromHousehold.getId());
    }


    @Test
    void deletingExpenseFromHouseHoldSucceed() {
        Household newHousehold = Household.builder()
                .name("new household")
                .expenses(new ArrayList<>())
                .build();
        householdRepository.save(newHousehold);
        Expense newExpense = Expense.builder()
                .name("new expense")
                .build();
        newHousehold.getExpenses().add(newExpense);
        expenseRepository.save(newExpense);
        householdRepository.save(newHousehold);

        Optional<Expense> persistedExpense = householdRepository.findById(newHousehold.getId()).get().getExpenses()
                .stream()
                .findFirst();
        Assertions.assertTrue(persistedExpense.isPresent());

        newHousehold.getExpenses().remove(newExpense);
        householdRepository.save(newHousehold);
        Optional<Expense> expenseAfterDelete = householdRepository.findById(newHousehold.getId()).get().getExpenses()
                .stream()
                .findFirst();
        Assertions.assertTrue(expenseAfterDelete.isEmpty());
    }

    void setUpForCategoryTest() {
        ExpenseCategory expenseCat1 = ExpenseCategory.builder()
                .name("ExpenseCat1")
                .build();

        ExpenseCategory expenseCat2 = ExpenseCategory.builder()
                .name("ExpenseCat2")
                .build();

        expenseCategoryRepository.saveAll(List.of(expenseCat1, expenseCat2));
        Expense expense1 = Expense.builder()
                .name("expense 1")
                .category(expenseCat1)
                .build();

        Expense expense2 = Expense.builder()
                .name("expense 2")
                .category(expenseCat1)
                .build();

        Expense expense3 = Expense.builder()
                .name("expense 3")
                .category(expenseCat2)
                .build();
        expenseRepository.saveAll(List.of(expense1, expense2, expense3));

        Household testHousehold = Household.builder()
                .name("test Household")
                .expenses(List.of(expense1, expense2, expense3))
                .build();

        householdRepository.save(testHousehold);
    }


    @Test
    void getHouseholdExpenseCategoryNames() {
        setUpForCategoryTest();
        Household testHousehold = householdRepository.findAll().stream().findFirst().orElseThrow();
        List<String> expectedCategoryNames = List.of("ExpenseCat1", "ExpenseCat2");

        List<String> categoryNames = householdRepository.getHouseholdExpenseCategoryNames(testHousehold);

        Assertions.assertFalse(categoryNames.isEmpty());
        Assertions.assertEquals(2, categoryNames.size());
        Assertions.assertEquals(expectedCategoryNames, categoryNames);
    }

}