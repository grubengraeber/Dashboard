package at.enough.dashboard.budget.controller.dto;

public record AddExpenseRequestDTO(String name, String categoryName, double value, String date) {


}
