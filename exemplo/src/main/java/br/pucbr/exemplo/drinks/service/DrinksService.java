package br.pucbr.exemplo.drinks.service;

import br.pucbr.exemplo.drinks.entity.Drinks;
import br.pucbr.exemplo.drinks.repository.DrinksRepository;
import br.pucbr.exemplo.util.excecao.ExcecaoExemplo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DrinksService {

    @Autowired
    private DrinksRepository drinksRepository;

    public Drinks salvar(Drinks drinks) throws ExcecaoExemplo {
        if (drinks.getNome() == null || drinks.getNome().equals("") || drinks.getNome().length() > 300) {
            //lanco um erro
            throw new ExcecaoExemplo("Erro03","Drink não encontrado.");
        }

        return drinksRepository.save(drinks);
    }

    public List<Drinks> listar() {
        return drinksRepository.findAll();
    }

    public Drinks buscarPorId(Integer id) {
        return drinksRepository.findById(id).get();
    }

    public void excluir(Integer id) {
        drinksRepository.deleteById(id);
    }

}

