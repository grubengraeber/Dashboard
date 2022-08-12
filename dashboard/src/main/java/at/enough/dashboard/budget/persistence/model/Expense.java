package at.enough.dashboard.budget.persistence.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Expense {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    private double cost;
    @JsonFormat(pattern = "dd.MM.yyyy")
    LocalDate date;
    @ManyToOne
    private ExpenseCategory category;
    @ManyToOne
    private Member member;


}
