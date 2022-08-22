package at.enough.dashboard.budget.service;

import at.enough.dashboard.budget.persistence.model.Expense;
import at.enough.dashboard.budget.persistence.model.ExpenseCategory;
import at.enough.dashboard.budget.persistence.model.Member;
import at.enough.dashboard.budget.persistence.repository.ExpenseCategoryRepository;
import at.enough.dashboard.budget.persistence.repository.ExpenseRepository;
import at.enough.dashboard.budget.persistence.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.SecureRandom;
import java.time.LocalDate;
import java.util.List;

@Component
public class BudgetDataCreator {

    private final int DATA_COUNT;
    private final int TIME_SPAN;

    private final ExpenseCategoryRepository expenseCategoryRepository;
    private final ExpenseRepository expenseRepository;
    private final MemberRepository memberRepository;

    private final List<String> expandNames = List.of(
            "coffee",
            "pet food",
            "mobile phone",
            "netflix",
            "groceries",
            "beer",
            "plants",
            "fuel",
            "pet food",
            "hair dresser"
    );


    public BudgetDataCreator(@Value("${data.budget-entries.count}") int data_count,
                             @Value("${data.budget-entries.time-span}") int time_span,
                             ExpenseCategoryRepository expenseCategoryRepository,
                             ExpenseRepository expenseRepository,
                             MemberRepository memberRepository) {
        DATA_COUNT = data_count;
        TIME_SPAN = time_span;
        this.expenseCategoryRepository = expenseCategoryRepository;
        this.expenseRepository = expenseRepository;
        this.memberRepository = memberRepository;
        createData();
        createRandomData(DATA_COUNT, LocalDate.now(), TIME_SPAN);
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

        ExpenseCategory luxury = ExpenseCategory.builder()
                .name("Living")
                .build();

        expenseCategoryRepository.saveAll(
                List.of(household, hobby, mobility, living, luxury)
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
                .cost(250.00)
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

        Expense expense5 = Expense.builder()
                .name("groceries")
                .cost(59.15)
                .member(fabio)
                .category(household)
                .date(LocalDate.now().minusDays(1))
                .build();

        expenseRepository.saveAll(List.of(expense1, expense2, expense3, expense4, expense5));


    }

    private void createRandomData(int count, LocalDate startDate, int timeSpanInDays) {
        List<ExpenseCategory> expenseCategories = expenseCategoryRepository.findAll();
        List<Member> member = memberRepository.findAll();
        for (int i = 0; i < count; i++) {
            LocalDate dateInPast = startDate.minusDays(timeSpanInDays);
            expenseRepository.save(getRandomExpense(expenseCategories, member, dateInPast));

        }


    }

    private Expense getRandomExpense(List<ExpenseCategory> categories, List<Member> members, LocalDate date) {
        SecureRandom random = new SecureRandom();


        return Expense.builder()
                .name(expandNames.get(random.nextInt(expandNames.size())))
                .member(members.get(random.nextInt(members.size())))
                .cost(random.nextDouble(50.0) * random.nextDouble(3.5))
                .category(categories.get(random.nextInt(categories.size())))
                .date(date)
                .build();

    }

}
