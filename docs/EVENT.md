# 🎉 Event Card - Documentação

O **Event Card** é um componente dinâmico que gera cards SVG personalizados para exibir informações sobre eventos. O card é gerado através de uma API que aceita parâmetros via query string e retorna um SVG customizado com animações e estilos modernos.

## 📋 Visão Geral

O Event Card permite criar cards visuais atraentes para eventos, com suporte a:
- Imagens personalizadas
- Cores customizáveis (background, foreground, decorativo)
- Textos dinâmicos (nome, descrição, data)
- Animações CSS suaves
- Efeitos de hover interativos
- Cache otimizado

## 🚀 Como Usar

### Endpoint da API
```
GET /api/github/event
```

### URL Base
```
https://victor-lis.vercel.app/api/github/event
```

## 📝 Parâmetros Disponíveis

| Parâmetro | Tipo | Obrigatório | Valor Padrão | Descrição |
|-----------|------|-------------|--------------|-----------|
| `photo` | string | ❌ | `""` | URL da imagem do evento |
| `background` | string | ❌ | `2a2c41` | Cor de fundo (hex sem #) |
| `foreground` | string | ❌ | `34df8b` | Cor principal do texto (hex sem #) |
| `decorative` | string | ❌ | `fff` | Cor do texto decorativo (hex sem #) |
| `name` | string | ❌ | `"?name="` | Nome do evento |
| `description` | string | ❌ | `"?description="` | Descrição do evento |
| `date` | string | ❌ | `"?date="` | Data do evento |

### 🎨 Detalhes dos Parâmetros

#### `photo`
- **Formato**: URL completa da imagem
- **Suporte**: Qualquer formato de imagem acessível via HTTP/HTTPS
- **Dimensões**: A imagem será redimensionada para 300x150px
- **Comportamento**: Se não fornecida, o card será exibido sem imagem
- **Exemplo**: `https://example.com/evento.jpg`

#### `background`
- **Formato**: Código hexadecimal sem o símbolo `#`
- **Exemplo**: `2a2c41` (azul escuro)
- **Uso**: Define a cor de fundo do card inteiro

#### `foreground`
- **Formato**: Código hexadecimal sem o símbolo `#`
- **Exemplo**: `34df8b` (verde)
- **Uso**: Cor do título e elementos destacados

#### `decorative`
- **Formato**: Código hexadecimal sem o símbolo `#`
- **Exemplo**: `ffffff` (branco)
- **Uso**: Cor da descrição do evento

#### `name`
- **Formato**: Texto livre
- **Codificação**: Deve ser URL encoded se contiver caracteres especiais
- **Exemplo**: `AWS%20Summit%202025`

#### `description`
- **Formato**: Texto livre
- **Codificação**: Deve ser URL encoded se contiver caracteres especiais
- **Exemplo**: `Conferência%20de%20tecnologia`

#### `date`
- **Formato**: Texto livre (recomenda-se formato de data legível)
- **Exemplo**: `15%20de%20Janeiro%2C%202025`

## 💡 Exemplos de Uso

### Exemplo Básico
```
https://victor-lis.vercel.app/api/github/event?photo=https://victor-lis.vercel.app/events/aws-summit-2025.jpg&name=AWS%20Summit&description=Cloud%20e%20networking&date=ago/2025
```

### Exemplo Completo (com Cores Personalizadas)
```
https://victor-lis.vercel.app/api/github/event?photo=https://victor-lis.vercel.app/events/aws-summit-2025.jpg&background=1a1a2e&foreground=0f3460&decorative=ffffff&name=AWS%20Summit&description=Cloud%20e%20networking&date=ago/2025
```

## 🎨 Paletas de Cores Sugeridas

### Tema Azul Profissional
```
background=1e3a8a
foreground=3b82f6
decorative=e0e7ff
```

### Tema Verde Tecnológico
```
background=064e3b
foreground=10b981
decorative=d1fae5
```

### Tema Roxo Criativo
```
background=581c87
foreground=a855f7
decorative=f3e8ff
```

### Tema Laranja Energético
```
background=9a3412
foreground=f97316
decorative=fed7aa
```

## 🔧 Implementação Técnica

### Características do SVG Gerado
- **Dimensões**: 300x295 pixels
- **Formato**: SVG responsivo
- **Fonte**: Google Fonts (Poppins)
- **Animações**: CSS keyframes com fadeIn
- **Efeitos**: Hover com transformações e sombras

### Headers de Resposta
```http
Content-Type: image/svg+xml
Cache-Control: public, max-age=3600
```

### Tratamento de Imagens
- As imagens são baixadas e convertidas para base64
- Suporte a qualquer formato de imagem via HTTP/HTTPS
- Fallback gracioso se a imagem não for acessível
- Clip-path aplicado para manter proporções

## 📱 Casos de Uso

### 1. GitHub README
```markdown
![Event](https://victor-lis.vercel.app/api/github/event?name=Meu%20Evento&date=2025-01-15)
```

### 2. Redes Sociais
Gere cards dinâmicos para compartilhar informações de eventos

### 3. Websites
Incorpore como imagens em qualquer página web

### 4. Documentação
Use em documentações técnicas para destacar eventos importantes

## ⚠️ Considerações Importantes

### Limitações
- Imagens devem estar publicamente acessíveis
- Textos muito longos podem ser cortados
- Dependente da conectividade para buscar imagens externas

### Encoding
- Sempre encode caracteres especiais nas URLs
- Espaços devem ser `%20`
- Acentos e símbolos precisam ser URL encoded

## 🛠️ Troubleshooting

### Imagem não aparece
- Verifique se a URL da imagem está acessível
- Confirme se não há CORS blocks
- Teste a URL diretamente no navegador

### Cores não aplicadas
- Certifique-se de não incluir o `#` no parâmetro
- Use apenas códigos hexadecimais válidos (6 caracteres)

### Textos com caracteres especiais
- Sempre use URL encoding para caracteres especiais
- Teste com ferramentas de encoding online

## 🔄 Versionamento

- **Versão atual**: 1.0
- **Compatibilidade**: Next.js 15+

---

**Desenvolvido com ❤️ para criar cards dinâmicos e personalizáveis**
