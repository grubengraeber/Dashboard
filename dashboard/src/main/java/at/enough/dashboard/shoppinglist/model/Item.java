package at.enough.dashboard.shoppinglist.model;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class Item {
    private long id;
    private String name;
    //ToDo add Supplier Object later?
    private String supplier;


}
