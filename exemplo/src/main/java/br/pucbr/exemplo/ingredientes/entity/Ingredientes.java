package br.pucbr.exemplo.ingredientes.entity;

import javax.persistence.*;

@Entity
@Table(name = "INGREDIENTES")
public class Ingredientes {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "NOME", nullable = false, unique = true)
    private String nome;


    //@CollectionTable(name = "DRINKS" , joinColumns = @JoinColumn(name = "id"))
    //@Enumerated(EnumType.STRING)




    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
