Wykorzystane biblioteki
Bootstrap
Angular-jwt
BCrypt.net
Microsoft.AspNetCore.Autentication.JwtBearer
Microsoft.EnittyFramewordkCore.SqlServer
Microsoft.EntityFrameworkCore.Tools
MySql.Data
MySql.EntityFrameworkCore
SwashBuckle.AspNetCore




Metody i Klasy

.NET ~~
~~BasicContactsController # kontroler kontrolujący zapytania dotyczące podstawowych kontaktów
	GetBasicContacts() # metoda get pobierająca z bazy podstawowe kontakty i zwracająca obiekt basisContact
~~CategoriesController #  kontroler kontrolujący zapytania dotyczące kategori, chroniony
	GetAllCategories() # get pobieranie wszystkich kategori z bazy 
~~Contacts Controller # kontroler kontrolujący zapytania dotyczące  kontaktów po zalogowaniu
	GetAllContacts() # pobranie wszystkich kontaktów
	AddContact() # dodanie kontaktu
	DeleteContact() # usuwanie kontaktu
	GetContact() # pobranie kontaktu po id
	UpdateContact # aktualizacja kontaktu po id
~~ Login Controller # kontroler kontrolujący zapytania dotyczące logowania
	Login() # sprawdzanie czy dane zgadzają się z bazą danych tworzenie tokenu jwt
	VerifyPassword() # sprawdzenie czy hasło zgadza sie z hashownym hasłem w bazie danych
~~ Register Controller # kontroler kontrolujący zapytania dotyczące rejestracji
	Register() # rejestracja, hashowanie hasła zapisanie w bazie danych
	HashPassword() # hashowanie hasła
~~ SubCategories Controller # kontroler kontrolujący zapytania dotyczące podkategori
	GetAllSubCategories() # pobranie wsyzstkich podkategori
	
	
	


Angular ~~
~~Components
	~~add-contact # klasa component do dodawania nowych kontaktów

		ngOnInit() # zapełnianie danych o kategoriach i pod kategoriach z bazy danych

		addContact() # metoda dodająca nowy kontakt do bazy danych po kliknięciu przycisku wyślij

	~~contact-list-logged # klasa component do wyświetlania listy kontaktów po zalogowaniu

		ngOnInit() #zapełnienie danych o kontaktach z bazy danych

		deleteContact() # metoda do usuwająca kontakt z bazy danych po wcisnieciu przycisku delete i ponowne zaciągnięcie danych z bazy

	~~contacts-list # klasa component do wyświetlania listy kontaktów przed zalogowaniem

		ngOnInit() # zaciągnięcie danych z bazy danych do wyświetlenia podstawowych kontaktów

	~~edit-contact # klasa component do edycji kontaktów po zalogowaniu
		ngOnInit() # pobieranie danych z bazy do wyświetlenia edytowanego kontaktu

		editContact() # po zatwierdzeniu edytuje kontakt

	~~header # klasa component header 

		ngOnDestroy() # metoda odsubskrybowanie zmiennej zprawdzającej czy użytkownik jest zalogowany

		ngOnInit() # metoda sprawdzająca czy użytkownik jest zalogowany

		logout() # metoda usuwająca token jwt przy kliknięciu przycisku wyloguj

		checkIfLogged() # metoda sprawdzająca czy w local storage dalej istnieje token jwt

	~~login # klasa component do logowania
		
		login() # logowanie użytkownika, przechowanie tokenu uwierzytelniającego logowanie

	~~register # klasa component do rejestracji
		
		Register() # Rejestracja użytkownika
~~ Guard
	~~auth-guard # guard spradzający czy uzytkownik posiada token jwt, jeżeli tak umożliwia przejście na componenty dostępne po zalogowaniu
		
~~services
	~~basicContactService # klasa serwis obsługująca połączenie z api i componentami
		
		getAllBasicContacts() # wywołuje zapytanie do api w celu pobrania wsystkich kontaktów gdy użytkownik nie jest zalogowany
	
	~~CategoriesService # klasa serwis obsługująca połączenie z api i componentami 

		getCategories()# wywołuje zapytanie do api w celu pobrania wszystkich kategori

	~~LoggedContactsService # klasa serwis obsługująca połączenie z api i componentami 
		getAllLoggedContacts() # wywołuje zapytanie do api w celu pobrania wszystkich kontaktów dostępnych po zalogowaniu
		deleteContact() # wywołuje zapytanie do api w celu usunięcie wybranego kontaktu po id
		addContact() # wywołuje zapytanie do api w celu dodania kontaktu 
		getContact() # wywołuje zapytanie do api w celu pobrania kontaktu po id
		updateContact() # wywołuje zapytanie do api w celu aktualizacji kontaktu
	~~LoginService # klasa serwis obsługująca połączenie z api i componentami 
		getToken() # wywołuje zapytanie do api w celu sprawdzenia czy dane logowania są poprawne i pobrania tokenu jwt
		setLogged() # ustawia zmienną na zalogowany
	~~ RegisterService  #klasa serwis obsługująca połączenie z api i componentami 
		Register() # wywołuje zapytanie do api w celu sprawdzenia czy dane rejestracyjne są poprawne, zapisanie użytkownika w bazie
	~~SubcategoriesSeervice # klasa serwis obsługująca połączenie z api i componentami 
		getCategories() #  wywołuje zapytanie do api w celu pobrania kategori

~~ models


	
		
		
