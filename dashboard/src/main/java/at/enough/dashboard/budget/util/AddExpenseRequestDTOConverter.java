package at.enough.dashboard.budget.util;

import at.enough.dashboard.budget.controller.dto.AddExpenseRequestDTO;
import at.enough.dashboard.budget.persistence.model.Expense;
import at.enough.dashboard.budget.persistence.model.ExpenseCategory;
import at.enough.dashboard.budget.persistence.repository.ExpenseCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.persistence.EntityNotFoundException;
import java.time.LocalDate;

@Component
@RequiredArgsConstructor
public class AddExpenseRequestDTOConverter {

    private final ExpenseCategoryRepository expenseCategoryRepository;

    public Expense convert(AddExpenseRequestDTO addExpenseRequestDTO) {
        ExpenseCategory category = expenseCategoryRepository.findByName(addExpenseRequestDTO.categoryName())
                .orElseThrow(() -> new EntityNotFoundException(
                        "ExpenseCategory not found by name " + addExpenseRequestDTO.categoryName())
                );


        return Expense.builder()
                .name(addExpenseRequestDTO.name())
                .date(LocalDate.parse(addExpenseRequestDTO.date()))
                .category(category)
                .build();

    }

}
