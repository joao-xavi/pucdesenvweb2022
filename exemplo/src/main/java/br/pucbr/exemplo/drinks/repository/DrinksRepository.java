package br.pucbr.exemplo.drinks.repository;

import br.pucbr.exemplo.drinks.entity.Drinks;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DrinksRepository extends JpaRepository<Drinks,Integer> {
}
