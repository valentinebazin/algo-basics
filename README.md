# Algorithmie

## Variables

Une variable est l'entité de base d'un algorithme (et d'un programme). Elle permet de stocker une information nécessaire au raisonnement et est définie par 3 propriétés :

 - Son nom (identifiant), par exemple `temperature`
 - Son type, par exemple `Integer`
 - Sa valeur, par exemple `18`

Exemple de déclaration d'une variable :
 `temperature: Integer = 18`

### Primitives
On distingue un premier groupe de variables, dit "primitives".

#### Variables numériques
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

#### Chaines de charactères ou String (dépendant du langage)

Les chaines de charactères sont des variables contenant des mots ou ensemble de mots. Selon les langages, ce type n'est pas toujours considéré comme un type primitif (souvent considéré comme un tableau de charactères, donc complexe), mais pour les besoins basiques de l'apprentissage de l'algorithmie, il est listé ici.

Exemple : `"hello: String = Hello, world!`

Il dispose souvent de l'opérateur de *concaténation* : `"Hello" + " world" == "Hello world"`

nb : `"018"` est une String et non un nombre (utile lorsqu'on a besoin de conserver les 0, par exemple pour un numéro de téléphone).

#### Booléens
Un booléen (boolean) est une variable pouvant contenir deux valeurs uniquement : VRAI (`true`) ou FAUX (`false`).
Une variable booléenne peut être instanciée simplement : `condition: boolean = true` mais sera souvent instanciée par l'usage d'opérateurs relationnels (`==`, `>`, `<`, `!=`, `>=`, `<=`).
Par exemple `isWeatherFine = temperature > 20` ou `isWaterFrozen = temperature == 0`

### Algèbre Booléenne
Les deux principaux opérateurs pour les booléens utilisés en programmation et en algorithmie pour la programmation, sont dits *opérateurs logiques*, et sont le ET (AND `&&`) et le OU (OR `||`).
|	AND (`&&`)	|	true	|	false	|
|--|--|--|
|	**true**	|			|			|
|	**false**	|			|			|

|	OR (`||`)	|	true	|	false	|
|--|--|--|
|	**true**	|			|			|
|	**false**	|			|			|

A ces opérateurs, on ajoute la négation (`!`) : `!true == false` et `!false == true`.

### Structures
Les autres types de variables sont dits "complexes" et correspondent notamment aux types d'objet (vu en POO). Nous nous limiterons ici aux structures de type tableau.
##### Array

##### Map

##### Portée des variables

  

## Conditions, Ternaires & Switch
### Conditions (IF)
Une condition (structure conditionnelle ou test) est définie en utilisant l'instruction SI (`if`). Elle permet de n'exécuter l'ensemble d'instruction qu'elle contient (branche) que si la condition est `true`.
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

#### Rémunération streamer

  

### Boucles For & While

#### Chess rook

#### Afficher triangle

#### Chess bishop

  

### Fonctions

#### Récursivité

#### Chess convert functions

#### Functions min / max

#### Fibonacci

  

### Exercices avancés

#### Chess moves

#### Calcul PGCD / PPCM

#### Map/Filter/Reduce

  

• Définition de l’algorithmie : quoi et pourquoi ?

  

• Les concepts de conditions et de boucle

  

• Les règles de nommage des variables

  

• Les structures de données de type tableau

  

• L’utilisation et la création de fonctions





