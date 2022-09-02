package at.enough.dashboard.util;

import java.util.List;

public record AppUserCredentialDTO(String username,
                                   List<String> authorities) {
}
