package br.pucbr.exemplo.ingredientes.service;

import br.pucbr.exemplo.ingredientes.entity.Ingredientes;
import br.pucbr.exemplo.ingredientes.repository.IngredientesRepository;
import br.pucbr.exemplo.usuario.entity.Usuario;
import br.pucbr.exemplo.util.excecao.ExcecaoExemplo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class IngredientesService {

    @Autowired
    private IngredientesRepository ingredientesRepository;

    public Ingredientes salvar(Ingredientes ingredientes) throws ExcecaoExemplo {
        if (ingredientes.getNome() == null || ingredientes.getNome().equals("")) {
            throw new ExcecaoExemplo("ERR001","O dados não podem ser nulos.");
        } else if (ingredientes.getNome().length() > 30) {
            throw new ExcecaoExemplo("ERRO04", "O nome do ingrediente não pode conter mais que 40 caracteres.");
        } else {
            return ingredientesRepository.save(ingredientes);
        }


    }

    public List<Ingredientes> listar() {
        return ingredientesRepository.findAll();
    }

    public Ingredientes buscarPorId(Integer id) throws ExcecaoExemplo {
        if( id == null) {
            throw new ExcecaoExemplo("ERRO05", "Ingrediente não encontrado.");
        }

        try {
            Ingredientes ingredientes = ingredientesRepository.findById(id).get();
        } catch (NoSuchElementException e) {
            throw new ExcecaoExemplo("ERRO05", "Ingrediente não encontrado.");
        }
        return ingredientesRepository.findById(id).get();
    }

    public void excluir(Integer id) {
        ingredientesRepository.deleteById(id);
    }

}

