package br.pucbr.exemplo.ingredientes.repository;

import br.pucbr.exemplo.ingredientes.entity.Ingredientes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientesRepository extends JpaRepository<Ingredientes,Integer> {
}
