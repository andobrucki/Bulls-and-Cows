# Bullen und Kühe

In diesem Projekt werden wir ein Spiel für zwei Spieler bauen, das **Bullen und Kühe** heißt.

![Kuh-Symbol](assets/cow.svg) ![Stier-Symbol](assets/bull.svg)

## Regeln

Einer der Spieler denkt sich eine geheime Zahl aus und der andere Spieler versucht, sie zu erraten.

Die Geheimzahl muss aus 4 Ziffern bestehen und jede Ziffer muss **einzigartig** sein.

Zum Beispiel:

- `1112` wäre **keine** akzeptable Geheimnummer.
- `1234` hingegen ist ein akzeptabler Wert für die Geheimnummer, da jede Ziffer einzigartig ist.

Nach jedem Tipp erhält der Spieler einen Hinweis, der ihm hilft, beim nächsten Mal besser zu raten.

Der Hinweis sagt dem Spieler, wie viele Stiere und wie viele Kühe es gab. Was sind Stiere und Kühe?

- Wenn die Ziffern übereinstimmen und sich an der richtigen Stelle befinden, werden sie als *"Stiere "* gezählt.
- Wenn sie sich an unterschiedlichen Positionen befinden, werden sie als *"Kühe "* gezählt.

Zum Beispiel mit der Geheimnummer `4271`:

>
    Versuch des Spielers: 1234

    Tipp: 1 Bulle und 2 Kühe


Wie kommen wir auf einen Stier und zwei Kühe?
Der Bulle ist die Nummer `2`, da er an der richtigen Stelle steht.

Die Kühe sind `4` und `1`, da sie in der geheimen Zahl vorkommen, aber nicht an der richtigen Stelle stehen.

Verrate dem Benutzer **nicht**, welche Ziffer eine Kuh und welche ein Stier ist, sondern nur, wie viele es sind (wenn überhaupt).

Es gibt keine Begrenzung für die Anzahl der Ratschläge - es wird so lange weitergeraten, bis der Spieler die geheime Zahl des anderen Spielers herausgefunden hat.

Sobald der Spieler die Geheimzahl richtig erraten hat, wird eine Nachricht angezeigt, um ihm zu gratulieren.

## Die Eingabe vom Terminal erhalten

Unser Spiel wird Spieler gegen Computer sein. Der Computer gibt eine geheime Zahl vor und der Spieler versucht, sie zu erraten.

Um die Eingaben des Spielers zu sammeln, verwenden wir ein npm-Paket namens [`prompt-sync`](https://github.com/heapwolf/prompt-sync).

Wir können das Paket wie folgt verwenden:

```js
// Paket importieren
const prompt = require('prompt-sync')({ sigint: true });
// Paket verwenden
let name = prompt('What is your name? '); // Beachte, dass am Ende ein Leerzeichen steht, damit die Eingabe nicht an der Frage hängen bleibt
```

Dann enthält die Variable name den Wert, den der Benutzer in das Terminal eingegeben hat.

Achte darauf, dass du die Eingabe bis zu einem gewissen Grad validierst. Zum Beispiel:

- Sie muss existieren (der Benutzer kann einfach die Eingabetaste drücken, aber wir sollten dies nicht als gültige Vermutung akzeptieren)
- sie muss aus 4 Ziffern bestehen
- jede der 4 Ziffern muss eindeutig sein

## Extra

Lass uns dieses Spiel noch besser machen!

Wenn du den Kern des Spiels zum Laufen gebracht hast,
sind hier einige coole Funktionen, die du als nächstes hinzufügen kannst:

- __Anzahl der Versuche__, die geheime Zahl zu erraten: Es gibt kein Limit für das Erraten, aber wir können festhalten, wie viele Versuche der Spieler gebraucht hat, um das Rätsel zu lösen.
- __Zufällige Nachricht__ jedes Mal, wenn der Nutzer keine Stiere und keine Kühe hat: Anstatt immer dieselbe Nachricht zu zeigen, können wir jedes Mal, wenn der Spieler keine Ziffern errät, eine Sammlung von lustigen Nachrichten erstellen.
- __Name des Nutzers__: Wir können den Namen des Spielers abfragen, wenn er ihn mitteilen möchte. Du kannst den Namen dann in den Glückwunsch- und Fehlermeldungen sowie in den Hinweisen verwenden. Wenn kein Name angegeben wird, kannst du eine Vorgabe wie `Spieler` oder `Fremder` verwenden.
- __Eine weitere Runde__: Wenn der Spieler oder die Spielerin die Zahl richtig erraten hat, kannst du ihn oder sie auffordern, eine weitere Runde zu spielen, wenn er oder sie das möchte, und das Spiel neu starten.
- __Noch eine Runde Statistik__: Wenn der/die Spieler/in mehrere Runden spielt, zeigst du die Gesamtzahl der gespielten Spiele und die Anzahl der Versuche für jedes Spiel an.
- __Maximale Anzahl von Versuchen__: Wenn der/die Nutzer/in in N Versuchen nicht raten kann, verliert er/sie das Spiel.
- __Konfigurierbares Spielniveau__: Der/die Nutzer/in kann wählen, ob er/sie im leichten oder im schweren Modus spielen möchte. Im leichten Modus kann es zum Beispiel kein Limit für die Anzahl der Versuche geben, während der schwierige Modus ein Limit haben kann.

Alle Extras sind nur **optional** - füge ein oder zwei hinzu, wenn du eine größere Herausforderung haben willst, aber erst **nachdem** der Kern des Spiels funktioniert. Vergiss nicht, deinen Code in die Versionskontrolle zu stellen, damit du bei Bedarf auf eine funktionierende Kopie zurückgreifen kannst.

## Deadline

Du hast ~3,5 Tage Zeit, um das Spiel zum Laufen zu bringen.

## Liefergegenstände

Ein Repository mit deinem Code.

**Viel Spaß beim Coding!** 🤓
