package br.pucbr.exemplo.ingredientes.controller;

import br.pucbr.exemplo.ingredientes.entity.Ingredientes;
import br.pucbr.exemplo.ingredientes.service.IngredientesService;
import br.pucbr.exemplo.util.base.BaseController;
import br.pucbr.exemplo.util.excecao.ExcecaoExemplo;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController


@RequestMapping("/ingredientes")
@SecurityScheme(
        name = "Bearer",
        type = SecuritySchemeType.HTTP,
        scheme = "bearer"
)
public class IngredientesController extends BaseController {

    @Autowired
    IngredientesService ingredientesService;

    @PostMapping
    public ResponseEntity<?> salvar(@RequestBody Ingredientes ingredientes) throws ExcecaoExemplo {
        ingredientes = ingredientesService.salvar(ingredientes);
        return new ResponseEntity<>(ingredientes, HttpStatus.CREATED);
    }

    @GetMapping
    public List<Ingredientes> listar() {
        return ingredientesService.listar();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ingredientes> buscarPorId(@PathVariable("id") Integer id) {
        try {
            Ingredientes ingredientes = ingredientesService.buscarPorId(id);
            return new ResponseEntity<>(ingredientes, HttpStatus.OK);
        } catch (NoSuchElementException | ExcecaoExemplo ex) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable("id") Integer id) {
        ingredientesService.excluir(id);
    }

}
