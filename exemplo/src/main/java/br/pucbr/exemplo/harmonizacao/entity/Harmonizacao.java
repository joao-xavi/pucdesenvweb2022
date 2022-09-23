package br.pucbr.exemplo.harmonizacao.entity;

import javax.persistence.*;

@Entity
@Table(name = "HARMONIZACAO")
public class Harmonizacao {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "NOME", nullable = false, unique = true)
    private String nome;

    @Column(name = "LOGIN", nullable = false, unique = true)
    private String login;

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
