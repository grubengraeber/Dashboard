package at.enough.dashboard.shoppinglist.dto;

import at.enough.dashboard.shoppinglist.model.ShoppingList;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;

@Component
public class ShoppingListDTOConverter implements DtoConverter<ShoppingList, ShoppingListDTO> {
    @Override
    public ShoppingListDTO toDTO(ShoppingList shoppingList) {
        return new ShoppingListDTO(
                shoppingList.getId(),
                shoppingList.getName(),
                shoppingList.getShoppingListPositions(),
                LocalDateTime.ofInstant(Instant.now(), ZoneId.systemDefault())
        );
    }

    @Override
    public ShoppingList fromDTO(ShoppingListDTO shoppingListDTO) {
        return null;
    }
}
