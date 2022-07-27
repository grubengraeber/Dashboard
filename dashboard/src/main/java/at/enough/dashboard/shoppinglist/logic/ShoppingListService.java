package at.enough.dashboard.shoppinglist.logic;

import at.enough.dashboard.shoppinglist.dto.ShoppingListDTO;
import at.enough.dashboard.shoppinglist.dto.ShoppingListDTOConverter;
import at.enough.dashboard.shoppinglist.model.ShoppingList;
import at.enough.dashboard.shoppinglist.model.repository.ShoppingListRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ShoppingListService {
    private final ShoppingListRepository shoppingListRepository;
    private final ShoppingListDTOConverter shoppingListDTOConverter;

    public List<ShoppingListDTO> getAll() {
        List<ShoppingList> shoppingLists = shoppingListRepository.findAll();
        if (shoppingLists.isEmpty()) {
            return Collections.emptyList();
        }

        return shoppingLists.stream()
                .map(shoppingListDTOConverter::toDTO)
                .collect(Collectors.toList());
    }

    public Optional<ShoppingListDTO> findBy(long id) {
        Optional<ShoppingList> shoppingListOptional = shoppingListRepository.findBy(id);
        if (shoppingListOptional.isEmpty()) {
            return Optional.empty();
        }

        return Optional.of(shoppingListDTOConverter.toDTO(shoppingListOptional.get()));


    }

}
