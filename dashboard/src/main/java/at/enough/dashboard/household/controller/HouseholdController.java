package at.enough.dashboard.household.controller;

import at.enough.dashboard.household.persistence.Household;
import at.enough.dashboard.household.service.HouseHoldService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/households")
@RequiredArgsConstructor
public class HouseholdController {

    private final HouseHoldService houseHoldService;

    @GetMapping("/my")
    public Household getAppUserHouseHold(Authentication authentication) {
        String userIdentifier = authentication.getName();
        return houseHoldService.getHouseHoldBy(userIdentifier);
    }
    @GetMapping("/mock")
    public Household getMockHouseHold() {
        return houseHoldService.getAll().stream().findFirst().get();
    }


}
