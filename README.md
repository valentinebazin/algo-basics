# Algorithmie

## Variables

Une variable est l'entité de base d'un algorithme (et d'un programme). Elle permet de stocker une information nécessaire au raisonnement et est définie par 3 propriétés :

 - Son nom (identifiant), par exemple `temperature`
 - Son type, par exemple `Integer`
 - Sa valeur, par exemple `18`

Exemple de déclaration d'une variable :
 `temperature: Integer = 18`

Après sa déclaration, une variable peut être appelée afin de réutiliser sa valeur :
```
favoriteGame: String = "Chess"
favoriteGame
// > "Chess"
```

Appeler une variable avant de l'avoir déclarée provoque une erreur, tout comme l'appeler en dehors de son *scope* :
```
##### {
	// ...
	bestMovie: String = "LOTR"
	// Le bloc dans lequel est définie la variable se termine ici, avec la fermeture de l'accolade.
}
print("My favorite movie is : " + bestMovie)
// > ❌❌❌❌❌❌❌❌❌❌❌ ^^^^^^^^^^ unknown variable "bestMovie"
```

### Primitives
On distingue un premier groupe de variables, dit "primitives".

#### Nombres
On distingue notamment, parmi les types de `number` :
 - Les *Entiers* : 

 `byte (1 byte)` -128 à +127

 `Short (2 bytes)` :  -32,768 à +32,767

 `Integer (4 bytes)` : -2,147,483,648 à +2,147,483,647

 `Long (8 bytes)` : -9,223,372,036,854,775,808 à +9,223,372,036,854,775,807

Ces types peuvent varier suivant les langages de programmation, et certains langages distingues les nombres signés (négatifs ou positifs) et les non signés (positifs uniquement). Un variable de type unsigned dispose d'autant de mémoire que son équivalente signed, ainsi, un unsigned byte sera compris entre 0 et 255 (au lieu de -128 à +127 pour son équivalent signé).

 - Les *Décimaux* :

 `float (4 bytes)` : 6 à 7 décimales.

 `double (8 bytes)` : 15 décimales. Par exemple : `accountBalance: Double = 525.89`.

#### String - Chaines de charactères (dépendant du langage)

Les chaines de charactères sont des variables contenant des mots ou ensemble de mots. Selon les langages, ce type n'est pas toujours considéré comme un type primitif (souvent considéré comme un tableau de charactères, donc complexe), mais pour les besoins basiques de l'apprentissage de l'algorithmie, il est listé ici.

Exemple : `"hello: String = Hello, world!`

Il dispose souvent de l'opérateur de *concaténation* : `"Hello" + " world" == "Hello world"`

nb : `"018"` est une String et non un nombre (utile lorsqu'on a besoin de conserver les 0, par exemple pour un numéro de téléphone).

#### Booléens
Un booléen (boolean) est une variable pouvant contenir deux valeurs uniquement : VRAI (`true`) ou FAUX (`false`).
Une variable booléenne peut être instanciée simplement : `condition: boolean = true` mais sera souvent instanciée par l'usage d'opérateurs relationnels (`==`, `>`, `<`, `!=`, `>=`, `<=`).
Par exemple `isWeatherFine = temperature > 20` ou `isWaterFrozen = temperature == 0`

### Algèbre Booléenne
Les deux principaux opérateurs pour les booléens utilisés en programmation et en algorithmie pour la programmation, sont dits *opérateurs logiques*, et sont le ET ou *conjonction* (AND `&&`) et le OU ou *disjonction* (OR `||`).

|	AND (`&&`)	|	true	|	false	|
|--|--|--|
|	**true**	|			|			|
|	**false**	|			|			|


|	OR (`\|\|`)	|	true	|	false	|
|--|--|--|
|	**true**	|			|			|
|	**false**	|			|			|


A ces opérateurs, on ajoute la négation (`!`) : `!true == false` et `!false == true`.

*note* Tout comme les opérateurs mathématiques, les opérateurs logiques respectent un ordre de précédence. Le **AND** est **prioritaire** sur le **OR** :
```
true || true && false
// > true
```
L'usage de parenthèses permet de changer l'ordre d'exécution des opérateurs (n'hésitez pas à ajouter des parenthèses "inutiles" si cela permet de dissiper les doutes lorsque les opérations s'enchaînent) :
```
(true || true) && false
// > false
```

**Théorème de Morgan**
 - Première loi - négation de la disjonction : `!(a || b) = !a || !b`
 - Deuxième loi - négation de la conjonction : `!(a && b) = !a && !b`

### Array - Tableau

Les autres types de variables sont dits "complexes" et correspondent notamment aux types d'objet (vu en POO). Nous nous limiterons ici aux structures de type tableau.

Une variable de type *array* permet de stocker plusieurs valeurs, généralement d'un même type : `notes: Double[] = [ 12.5, 17, 14.5, 19, 16 ]`

Il est possible de définir des arrays à plusieurs dimensions :
```
echiquier: String[][] = [
	[ "rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook" ],
	[ "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", ],
	[ "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", ],
	...
	[ "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", ],
	[ "rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook" ],
]
```
  

## Conditions, Ternaires & Switch

### Conditions (IF)
Une condition (structure conditionnelle ou test) est définie en utilisant l'instruction SI (`if`). Elle permet de n'exécuter l'ensemble d'instruction qu'elle contient (branche) que si la condition est un booléen de valeur `true`.
Elle prend en argument un booléen (variable ou condition définie par un opérateur relationnel) :
```
if (isWeatherFine) {
	// instruction
}
```
ou
```
if (temperature > 20) {
	// instruction
}
```
Une seconde branche peut être définie avec l'instruction `else`, qui ne sera exécutée que si la condition du `if` est `false` :
```
if (temperature < 20) {
	mettreUnPull();
} else {
	sortirEnTShirt();
}
```

Il est possible d'enchainer les conditions `if` (pour faciliter la lisibilité, les accolades - optionnelles - ont ici été enlevées, mais il est préférable de toujours les mettre) : 
```
if (conditionA)
	actionA()
else if (conditionB)
	actionB()
else
	actionC() 
```
### Switch

Lorsqu'un ensemble de conditions s'applique sur la valeur d'une même variable :
```
if (word == "hello")
	//
else if (word == "ciao")
	//
else if (word == "bye")
...
```
On peut préférer utiliser la structure *switch*, qui prend en paramètre la variable et définit une branche par valeur possible :
```
switch(word):
	case "hello":
		//
		break; // exécuté seulement si "hello"
	case "ciao":
	case "bye":
		// exécuté si "ciao" ou "bye"
		break;
	default:
		// executé si aucune branche ne match
```

### Ternaire

Une condition ternaire a l'avantage de tenir en une ligne, mais peut nuire à la lisibilité du code pour un cas complexe. Elle devrait être réservées aux conditions simples :
`numberSign: String = myNumber >= 0 ? "positive" : "negative"`


### Boucles For & While


Afin de répéter un ensemble d'un struction plusieurs fois, ou un nombre dynamique de fois (voire infini), nous disposons des instructions de boucle (loop) : **for** et **while**.

#### For

L'instruction for permet d'itérer suivant la valeur d'un index (souvent noté *i* ou *j*) :
```
for (i: Integer = 0; i < 10; ++i) {
	// do something 10 times
}
```
(nb :  `++i` est un opérateur d'incrémentation, équivalent à `i = i + 1`, et équivalent à ` i++`, au détail près que dans le premier cas, la valeur renvoyée est celle post incrémentation, et la valeur pré incrémentation dans le second.  Il est aussi possible de décrémenter : `--i`)

#### While

Tandis que l'instruction while s'exécute tant qu'une condition est vraie :
```
while (i > 0) {
	// do something
	++i; // Bien penser à la condition de sortie, ou à utiliser un break;
		// afin de ne pas créer de boucle infinie !!
}
```

`while (true) { }` pour créer une boucle infinie


### Fonctions

Une fonction est une structure permettant de définir et de regrouper un ensemble d'instructions, afin les exécuter à chacun de ses appels.
Il faut distinguer la déclaration d'une fonction :
```
function sayHello() {
	print("Hello, World!")
}
```
de son appel :
```
sayHello()
// > "Hello, World!"
```
Une fonction peut définir des **paramètres**, c'est à dire des variables locales aux contexte seul de la fonction : 
```
function convertToMetric(distanceFeet: Double) {
	print("Voici mes arguments : " + distanceFeet)
	//... 
}
```
que les puristes nommeront **arguments** lors de son appel : 
```
convertToMetric(17.6)
// > "Voici mes arguments : 17.6
```


#### Fonctions récursives

Une fonction récursive est une fonction ayant la particularité de s'appeler elle même !
Afin de ne pas créer une récursion infinie, il faut impérativement penser à la condition de sortie (appelée **garde** et qu'il est souvent plus simple et clair de définir en première instruction). On trouve donc des similitudes avec les boucles, ces deux solutions offrent les mêmes possibilités et peuvent souvent être utilisées de façon interchangeables, selon les préférences et ce qui est le plus clair.

```
function factorial(n: Int) {
	if (n < 0) throw error("factorial only exists for positive numbers")
	// guard (autant y penser mainteant, on créé la sortie, tout en gérant les cas limites)
	if (n == 0 || n == 1) {
		return 1
	} else {
		return n * factorial(n - 1)
	}
}

// factorial(4) = 4 * factorial(3)
// factorial(4) = 4 * 3 * factorial(2)
// factorial(4) = 4 * 3 * 2 * factorial(1)
// factorial(4) = 4 * 3 * 2 * 1 = 24
```

*note* certains langages (fonctionnels purs) ne disposent même pas des instructions de boucle dans leur *paradigme*. Toutes les itérations se font par récursion.

## Bonnes pratiques

 - Prenez toujours le temps de nommer soigneusement vos variables et fonctions. De mauvais choix de nommages nuisent gravement à la lisibilité et la maintenabilité du code. Un nommage approprié sera à la fois explicite, clair et concis.
 Les conventions de nommage varient suivant les langages mais on retrouve le plus fréquemment le `camelCase` ou le `snake_case`.
 - Une variable doit être nommée selon son sens, ou notion "métier", et non sa valeur :
 
❌`zero: Double = 0.0`❌ | ✅`freezingTemperature: Double = 0.0`✅.
 - Une fonction doit être nommée selon ce qu'elle fait, et non selon comment elle le fait, ou pourquoi elle est appelée.
 - Limitez toujours la portée d'une variable au plus proche de son scope d'utilisation (le plus réduit possible) : si elle n'est utilisée que dans une boucle, ou une condition, alors ne la déclarez que dans ces blocs. De même, préférez passer une variable en argument d'une fonction, plutôt que de manipuler des variables dites "globales", tant que cela est possible.
