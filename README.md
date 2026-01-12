# pokemon matchup checker - does pokemon A win against pokemon B?

### context
battles in "core" pokemon games are turn-based (where two pokemon fight each other in turns)

the goal of this mini project is to return the result of a battle (and the battle itself) between two pokemon

---

### example
pokemon B wins, battle:
* pokemon A: tackle - B's hp = 11
* pokemon B: scratch - A's hp = 10
* pokemon A: tackle - B's hp = 1
* pokemon B: scratch - A's hp = 0
* pokemon A faints

---

### notes
* attributes that will be considered in a battle:
  * type weaknesses/resistances
  * health points (HP)
  * physical and special attack (Atk, Sp. Atk)
  * physical and special defense (Def, Sp. Def)
  * speed
* a pokemon will always use the move which deals the most damage against the opposite pokemon
  * for example: if __pokemon A__ has __thunder shock (40 power)__ and __spark (65 power)__
+ moves that dont deal damage wont be considered (defense curl, swords dance, etc)

---

### use case
if __pokemon A loses against pokemon B__ dealing the most damage possible (only using damaging moves), a player could make two decisions:
* not use A to fight B
* use moves like defense curl/swords dance and try to win that way