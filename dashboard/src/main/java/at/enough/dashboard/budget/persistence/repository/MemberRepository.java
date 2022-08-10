package at.enough.dashboard.budget.persistence.repository;

import at.enough.dashboard.budget.persistence.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
