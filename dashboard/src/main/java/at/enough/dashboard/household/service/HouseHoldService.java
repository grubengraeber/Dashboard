package at.enough.dashboard.household.service;

import at.enough.dashboard.household.persistence.Household;
import at.enough.dashboard.household.persistence.HouseholdRepository;
import at.enough.dashboard.user.model.AppUser;
import at.enough.dashboard.user.service.AppUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class HouseHoldService {

    private final HouseholdRepository householdRepository;
    private final AppUserService appUserService;

    public Household getHouseHoldBy(String userIdentifier) {
        AppUser appUser = appUserService.getAppUserBy(userIdentifier);
        return householdRepository.findHouseholdByAppUsersContaining(appUser);


    }
}
