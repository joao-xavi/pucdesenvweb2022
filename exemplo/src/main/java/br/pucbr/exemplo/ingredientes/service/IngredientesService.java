package br.pucbr.exemplo.ingredientes.service;

import br.pucbr.exemplo.ingredientes.entity.Ingredientes;
import br.pucbr.exemplo.ingredientes.repository.IngredientesRepository;
import br.pucbr.exemplo.util.excecao.ExcecaoExemplo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientesService {

    @Autowired
    private IngredientesRepository ingredientesRepository;

    public Ingredientes salvar(Ingredientes ingredientes) throws ExcecaoExemplo {
        if (ingredientes.getNome() == null || ingredientes.getNome().equals("") || ingredientes.getNome().length() > 300) {
            //lanco um erro
            throw new ExcecaoExemplo("Erro02","Ingrediente não encontrado.");
        }

        return ingredientesRepository.save(ingredientes);
    }

    public List<Ingredientes> listar() {
        return ingredientesRepository.findAll();
    }

    public Ingredientes buscarPorId(Integer id) {
        return ingredientesRepository.findById(id).get();
    }

    public void excluir(Integer id) {
        ingredientesRepository.deleteById(id);
    }

}

