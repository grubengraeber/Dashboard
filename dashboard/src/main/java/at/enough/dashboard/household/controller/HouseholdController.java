package at.enough.dashboard.household.controller;

import at.enough.dashboard.household.service.HouseHoldService;
import at.enough.dashboard.household.persistence.Household;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/household")
@RequiredArgsConstructor
public class HouseholdController {

    private final HouseHoldService houseHoldService;

    @GetMapping
    public Household getAppUserHouseHold(Authentication authentication) {
        String userIdentifier = authentication.getName();
        return houseHoldService.getHouseHoldBy(userIdentifier);


    }

}
