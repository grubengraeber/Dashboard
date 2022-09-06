package at.enough.dashboard.user.service;

import at.enough.dashboard.user.model.Role;
import at.enough.dashboard.user.model.RoleValues;
import at.enough.dashboard.user.repository.RoleRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Slf4j
public class RoleDataProvider {

    private final RoleRepository roleRepository;

    public RoleDataProvider(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
        createData();

    }

    private void createData() {
        Role admin = new Role(null, RoleValues.Admin.name());
        Role user = new Role(null, RoleValues.User.name());
        List<Role> roles = List.of(admin, user);
        roleRepository.saveAll(roles);
        log.info("Roles created: " + roles);
    }


}
