package at.enough.dashboard.shoppinglist.model;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;


@Entity
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "household_user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    private String firstName;
    private String lastName;
    private String userName;
    private String email;


}
