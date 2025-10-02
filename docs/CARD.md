# GitHub Card Dinâmico

Este é um serviço de API para gerar um card de apresentação dinâmico em formato SVG, ideal para ser usado em seus READMEs do GitHub, sites ou qualquer lugar que suporte imagens SVG. O card é altamente customizável através de parâmetros na URL.

## Como Usar

Para gerar seu card, utilize a seguinte URL base e adicione os parâmetros que desejar para customizar as informações:

```
https://victor-lis.vercel.app/api/github/card
```

### Exemplo de Uso em Markdown

Você pode embutir o card em um arquivo Markdown (como o `README.md` do seu perfil no GitHub) da seguinte forma:

```markdown
![Meu Card Dinâmico](https://victor-lis.vercel.app/api/github/card?title=Analista%20e%20Desenvolvedor%20de%20Sistemas&profession=Full%20Stack%20Developer&description=Apaixonado%20por%20soluções%20criativas!&github=Victor-Lis&name1=Victor&name2=Lis&name3=Bronzo&age=18%20anos&linkedin=victor-lis-bronzo&portfolio=https://victor-lis.vercel.app)
```

## Parâmetros Disponíveis

Todos os parâmetros são opcionais. Você pode combiná-los como preferir para montar seu card.

| Parâmetro     | Descrição                                                                                                 | Exemplo                                           |
|---------------|-----------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| `name1`       | A primeira linha do seu nome.                                                                             | `?name1=Victor`                                   |
| `name2`       | A segunda linha do seu nome.                                                                              | `?name2=Lis`                                      |
| `name3`       | A terceira linha do seu nome.                                                                             | `?name3=Bronzo`                                   |
| `age`         | Sua idade ou data de nascimento.                                                                          | `?age=25`                                         |
| `title`       | Seu título principal ou cargo.                                                                            | `?title=Desenvolvedor%20Full-Stack`               |
| `profession`  | Sua profissão ou área de atuação.                                                                         | `?profession=Engenheiro%20de%20Software`          |
| `description` | Uma breve descrição sobre você.                                                                           | `?description=Apaixonado%20por%20tecnologia`      |
| `github`      | Seu nome de usuário do GitHub. Usado para gerar o link e a foto de perfil (se `photo` não for especificado). | `?github=Victor-Lis`                              |
| `linkedin`    | O texto para o link do seu perfil no LinkedIn.                                                            | `?linkedin=Victor%20Lis%20Bronzo`                 |
| `portfolio`   | O texto para o link do seu portfólio.                                                                     | `?portfolio=Meu%20Site`                           |
| `photo`       | URL para uma foto de perfil personalizada. Substitui a foto do GitHub.                                    | `?photo=https://meusite.com/foto.jpg`             |
| `background`  | Cor de fundo do card (em hexadecimal, sem o `#`). O padrão é `2a2c41`.                                    | `?background=0077b5`                              |
| `foreground`  | Cor dos elementos principais no card (em hexadecimal, sem o `#`). O padrão é `34df8b`.                    | `?foreground=ffffff`                              |
| `textColor`   | Cor do texto claro no card (em hexadecimal, sem o `#`). O padrão é `ffffff`.                             | `?textColor=f0f0f0`                               |
| `textDark`    | Cor do texto escuro no card (em hexadecimal, sem o `#`). O padrão é `2a2c41`.                            | `?textDark=333333`                                |

**Observação:** Para usar espaços e caracteres especiais nos valores dos parâmetros, utilize a codificação de URL (por exemplo, `%20` para espaço).

## Exemplo Completo

Aqui está um exemplo com vários parâmetros para demonstrar a customização:

```markdown
![](https://victor-lis.vercel.app/api/github/card?title=Analista%20e%20Desenvolvedor%20de%20Sistemas&profession=Full%20Stack%20Developer&description=Apaixonado%20por%20soluções%20criativas!&github=Victor-Lis&name1=Victor&name2=Lis&name3=Bronzo&age=18%20anos&linkedin=victor-lis-bronzo&portfolio=https://victor-lis.vercel.app&background=8e44ad&foreground=ecf0f1&textColor=ffffff&textDark=2c3e50)
```

Isso irá gerar o seguinte card:

![](https://victor-lis.vercel.app/api/github/card?title=Analista%20e%20Desenvolvedor%20de%20Sistemas&profession=Full%20Stack%20Developer&description=Apaixonado%20por%20soluções%20criativas!&github=Victor-Lis&name1=Victor&name2=Lis&name3=Bronzo&age=18%20anos&linkedin=victor-lis-bronzo&portfolio=https://victor-lis.vercel.app&background=8e44ad&foreground=ecf0f1&textColor=ffffff&textDark=2c3e50)
