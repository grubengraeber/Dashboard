package at.enough.dashboard.budget.service;

import at.enough.dashboard.budget.persistence.model.Expense;
import at.enough.dashboard.budget.persistence.model.ExpenseCategory;
import at.enough.dashboard.budget.persistence.model.Member;
import at.enough.dashboard.budget.persistence.repository.ExpenseCategoryRepository;
import at.enough.dashboard.budget.persistence.repository.ExpenseRepository;
import at.enough.dashboard.budget.persistence.repository.MemberRepository;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;

@Component
public class BudgetDataCreator {


    private final ExpenseCategoryRepository expenseCategoryRepository;
    private final ExpenseRepository expenseRepository;
    private final MemberRepository memberRepository;

    public BudgetDataCreator(ExpenseCategoryRepository expenseCategoryRepository,
                             ExpenseRepository expenseRepository,
                             MemberRepository memberRepository) {
        this.expenseCategoryRepository = expenseCategoryRepository;
        this.expenseRepository = expenseRepository;
        this.memberRepository = memberRepository;
        createData();

    }

    private void createData() {
        ExpenseCategory household = ExpenseCategory.builder()
                .name("Household")
                .build();

        ExpenseCategory hobby = ExpenseCategory.builder()
                .name("Hobby")
                .build();

        ExpenseCategory mobility = ExpenseCategory.builder()
                .name("Mobility")
                .build();

        ExpenseCategory living = ExpenseCategory.builder()
                .name("Living")
                .build();

        expenseCategoryRepository.saveAll(
                List.of(household, hobby, mobility, living)
        );

        Member patrick = new Member(0, "patrick");
        Member fabio = new Member(0, "fabio");

        memberRepository.saveAll(List.of(patrick, fabio));

        Expense expense1 = Expense.builder()
                .name("Toilettpaper")
                .cost(4.90)
                .member(patrick)
                .category(living)
                .date(LocalDate.now())
                .build();

        Expense expense2 = Expense.builder()
                .name("cigarettes")
                .cost(7.00)
                .member(patrick)
                .category(hobby)
                .date(LocalDate.now())
                .build();


        Expense expense3 = Expense.builder()
                .name("rent")
                .cost(1200.00)
                .member(fabio)
                .category(household)
                .date(LocalDate.now())
                .build();

        Expense expense4 = Expense.builder()
                .name("groceries")
                .cost(59.15)
                .member(fabio)
                .category(household)
                .date(LocalDate.now().minusDays(1))
                .build();


        expenseRepository.saveAll(List.of(expense1, expense2, expense3, expense4));


    }
}
