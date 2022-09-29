package br.pucbr.exemplo.drinks.service;

import br.pucbr.exemplo.drinks.entity.Drinks;
import br.pucbr.exemplo.drinks.repository.DrinksRepository;
import br.pucbr.exemplo.harmonizacao.entity.Harmonizacao;
import br.pucbr.exemplo.util.excecao.ExcecaoExemplo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class DrinksService {

    @Autowired
    private DrinksRepository drinksRepository;

    public Drinks salvar(Drinks drinks) throws ExcecaoExemplo {
        if (drinks.getNome() == null || drinks.getNome().equals("")) {
            throw new ExcecaoExemplo("ERR001","O dados não podem ser nulos.");
        } else if (drinks.getNome().length() > 40) {
            throw new ExcecaoExemplo("ERRO04", "O nome do drink não pode conter mais que 30 caracteres.");
        } else {
            return drinksRepository.save(drinks);
        }
    }

    public List<Drinks> listar() {
        return drinksRepository.findAll();
    }

    public Drinks buscarPorId(Integer id) throws ExcecaoExemplo {
        if( id == null) {
            throw new ExcecaoExemplo("ERRO07", "Drink não encontrado.");
        }

        try {
            Drinks drinks = drinksRepository.findById(id).get();
        } catch (NoSuchElementException e) {
            throw new ExcecaoExemplo("ERRO07", "Harmonização não encontrada.");
        }
        return drinksRepository.findById(id).get();
    }

    public void excluir(Integer id) {
        drinksRepository.deleteById(id);
    }

}

