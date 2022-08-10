package at.enough.dashboard.budget.persistence.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Set;

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
    LocalDate date;
    @ManyToOne
    private ExpenseCategory category;
    @ManyToOne
    private Member member;


}
