package at.enough.dashboard.shoppinglist.controller.dto;

public interface DtoConverter<T, U> {

    U toDTO(T t);

    T fromDTO(U u);


}
