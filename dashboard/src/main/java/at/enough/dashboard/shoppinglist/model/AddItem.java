package at.enough.dashboard.shoppinglist.model;

import lombok.*;
import org.springframework.stereotype.Component;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Component
public class AddItem {
    private String name;
    private int amount;
}
