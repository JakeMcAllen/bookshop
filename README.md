# Challenge AI
Challenge consiste in un'applicazione web di base per un negozio di libri. L'applicazione dovrebbe consentire agli utenti di visualizzare i libri disponibili, inserirne di nuovi, modificarli e eliminarli.


## Structure
![alt text](https://github.com/JakeMcAllen/bookshop/blob/main/bookshoop.png?raw=true)

 
## Componenti chiave del task:

1. Database: 

È necessario configurare un database per memorizzare le informazionali sul libro. Il libro dovrebbe avere attributi come: ID, titolo, autore, anno di pubblicazione e prezzo. Puoi utilizzare qualsiasi DBMS di tua scelta, come MySQL, MongoDB, PostgreSQL ecc.

 

2. Backend: 

Il backend dell'applicazione deve essere costruito utilizzando una delle seguenti tecnologie: Node.js, Django, Flask, Ruby on Rails ecc. Dovrebbe avere API REST per CREATE, READ, UPDATE e DELETE (CRUD) operazioni per i libri.

 

3. Frontend: 

Il frontend dovrebbe essere costruito usando HTML/CSS e JavaScript (o uno dei suoi framework, come React, Angular o Vue.js). La UI dovrebbe avere una tabella/tab per visualizzare tutti i libri dal database.

 

## Funzionalità

 

Almeno una feature basata su AI, tua idea e scelta per lo Use case libreria

 

1. Visualizzazione dei libri (Priorità alta): Gli utenti devono essere in grado di vedere tutti i libri disponibili nell'inventario. Questo dovrebbe recuperare i dati dal database e visualizzarli in una tabella/tab sulla pagina principale.

 

2. Crea un nuovo libro (Priorità alta): Gli utenti devono essere in grado di aggiungere un nuovo libro all'inventario. Questo richiederà un modulo separato dove gli utenti possono inserire i dettagli del libro e una API POST per inviare queste informazioni al server e poi al database.

 

3. Modifica le informazioni del libro (Priorità alta): Gli utenti devono essere in grado di modificare le informazioni di un libro esistente. Questo richiederà una API PUT per inviare le modifiche al server e quindi al database.

 

4. Elimina un libro (Priorità alta): Gli utenti devono essere in grado di eliminare un libro dall'inventario. Questo richiederà un pulsante di eliminazione sulla tabella/tab dei libri e una API DELETE per inviare la richiesta di eliminazione al server.

 

5. Filtra i libri (Priorità media): Gli utenti devono essere in grado di filtrare i libri in base a vari criteri (ad es. per autore, titolo, anno di pubblicazione). Il front-end dovrà implementare questa funzionalità e il back-end dovrà supportare eventuali parametri di filtro.

 

6. Ordina i libri (Priorità media): Gli utenti devono poter ordinare i libri in base a vari attributi (ad es. prezzo, anno di pubblicazione). Simile al filtro, anche questa funzione necessiterà di supporto sia dal frontend che dal backend.

 

7. Pagina dettagli del libro (Priorità media): Quando un utente clicca su un libro, dovrebbe essere portato a una pagina con maggiori dettagli sul libro. Questo richiederebbe un ulteriore supporto API dal backend.

 

8. Creazione account utente (Priorità bassa): I futuri utenti potrebbero volere la capacità di creare un account per conservare i propri libri preferiti, scrivere recensioni, ecc.

 

9. Sistema di recensioni/rating (Priorità bassa): Gli utenti con un account dovrebbero essere in grado di lasciare recensioni o valutazioni sui libri.

 

10. Carrello/E-commerce (Priorità bassa): Sebbene questo vada oltre il semplice mantenimento di un inventario, la possibilità di aggiungere un libro a un carrello e effettuare un acquisto potrebbe essere un'interessante futura estensione dell'applicazione. 

Ricorda, queste sono funzionalità aggiuntive e dovrebbero essere considerate solo una volta che le funzionalità principali (CRUD) sono state implementate correttamente.

## PLUS:
Componente AI
