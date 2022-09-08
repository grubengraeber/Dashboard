package at.enough.dashboard.creators;

import at.enough.dashboard.budget.persistence.repository.ExpenseRepository;
import at.enough.dashboard.household.persistence.Household;
import at.enough.dashboard.household.persistence.HouseholdRepository;
import at.enough.dashboard.shoppinglist.dao.repository.ShoppingListRepository;
import at.enough.dashboard.user.model.AppUser;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.List;

@Component
public class HouseHoldCreator {

    private final HouseholdRepository householdRepository;
    private final ExpenseRepository expenseRepository;
    private final ShoppingListRepository shoppingListRepository;
    private final AppUserDataCreator appUserDataCreator;

    public HouseHoldCreator(HouseholdRepository householdRepository,
                            ExpenseRepository expenseRepository,
                            ShoppingListRepository shoppingListRepository, AppUserDataCreator appUserDataCreator) {
        this.householdRepository = householdRepository;
        this.expenseRepository = expenseRepository;
        this.shoppingListRepository = shoppingListRepository;
        this.appUserDataCreator = appUserDataCreator;

        createData();
    }

    private void createData() {
        List<AppUser> userList = appUserDataCreator.createUserList();


        Household testHousehold = Household.builder()
                .name("test Household")
                .appUsers(new HashSet<>(userList))
                //.expenses(expenseRepository.findAll())
                .shoppingLists(new HashSet<>(shoppingListRepository.findAll()))
                .build();

        householdRepository.save(testHousehold);


    }


}
