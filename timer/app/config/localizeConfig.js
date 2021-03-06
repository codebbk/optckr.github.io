angular.module('app')
	.config(function ($translateProvider) {
		$translateProvider.translations('en', {
			NAV_TURTLE: '거북이 타임',
			NAV_BARREL: 'Barrel Breaking',
			NAV_EVENT: 'Event',
			NAV_CONTACT: 'Contact Me',
			NAV_SETTINGS: 'Settings',
			TT_TITLE: '거북이 시간 계산기',
			TT_DIGIT: '친구코드 6번째 자리:',
			TT_FORMAT: '24시간으로 표시',
			TT_TIMEZONE: '시간대:',
			TT_SEEMORE: '더보기',
			TT_ADD_CALENDAR: 'Add to Calendar',
			TT_NOTIFICATION: '알람설정',
			TT_NOTIF_MINUTES: '이벤트 시작 전 알림',
			TT_NOTIF_SOUND: '사운드 듣기',
			TT_NOTIF_EXAMPLE: '테스트',
			BB_TITLE: 'Barrel Breaking',
			BB_TIME: 'Time till next rotation:',
			BB_ALT: 'Show Hours',
			BB_DATE: 'Date',
			BB_WOODEN: 'Wooden',
			BB_SILVER: 'Silver',
			BB_GOLD: 'Gold'
		})
		.translations('de', {
			NAV_TURTLE: 'Turtle Zeiten',
			NAV_BARREL: 'Friend Game',
			NAV_EVENT: 'Ereignis',
			NAV_CONTACT: 'Kontaktiere Mich',
			NAV_SETTINGS: 'Einstellungen',
			TT_TITLE: 'Turtle Zeiten Rechner',
			TT_DIGIT: '6te Ziffer der ID:',
			TT_FORMAT: '24-Stunden Format',
			TT_TIMEZONE: 'Zeitzone:',
			TT_SEEMORE: 'siehe mehr',
			TT_ADD_CALENDAR: 'Zum Kalender hinzufügen',
			TT_NOTIFICATION: 'Mitteilungeinstellungen',
			TT_NOTIF_MINUTES: 'Minuten bis zur Veranstaltung',
			TT_NOTIF_SOUND: 'Ton abspielen',
			TT_NOTIF_EXAMPLE: 'Beispiel',
			BB_TITLE: 'Barrel Breaking',
			BB_TIME: 'Zeit bis zum nächsten Wechsel:',
			BB_ALT: 'Anzeige Stunden',
			BB_DATE: 'Datum',
			BB_WOODEN: 'Holz',
			BB_SILVER: 'Silber',
			BB_GOLD: 'Gold'
		})
		.translations('es', {
			NAV_TURTLE: 'Horario Tortugas',
			NAV_BARREL: 'Friend Game',
			NAV_EVENT: 'Evento',
			NAV_CONTACT: 'Contáctame',
			NAV_SETTINGS: 'Configuración',
			TT_TITLE: 'Horario Tortugas Calculadora',
			TT_DIGIT: '6th dígito de ID:',
			TT_FORMAT: '24 horas',
			TT_TIMEZONE: 'Zona Horaria:',
			TT_SEEMORE: 'ver más',
			TT_ADD_CALENDAR: 'Añadir al calendario',
			TT_NOTIFICATION: 'Configuración De Las Notificaciones',
			TT_NOTIF_MINUTES: 'Minutos antes de evento',
			TT_NOTIF_SOUND: 'Reproducir sonido',
			TT_NOTIF_EXAMPLE: 'Ejemplo',
			BB_TITLE: 'Friend Game',
			BB_TIME: 'Tiempo hasta la próxima rotación:',
			BB_ALT: 'Mostrar las horas',
			BB_DATE: 'Fecha',
			BB_WOODEN: 'Madera',
			BB_SILVER: 'Plata',
			BB_GOLD: 'Oro'
		})
		.translations('fr', {
			NAV_TURTLE: 'Horaires des Tortues',
			NAV_BARREL: 'Partie d\'amis',
			NAV_EVENT: 'Event',
			NAV_CONTACT: 'Me Contacter',
			NAV_SETTINGS: 'Réglages',
			TT_TITLE: 'Calculateur de l\'Horaire des Tortues',
			TT_DIGIT: '6eme chiffre ID:',
			TT_FORMAT: 'Format 24h',
			TT_TIMEZONE: 'Fuseau Horaire:',
			TT_SEEMORE: 'Lire la suite',
			TT_ADD_CALENDAR: 'Ajouter au Calendrier',
			TT_NOTIFICATION: 'Réglages des Notifications',
			TT_NOTIF_MINUTES: 'Temps Restant avant Event',
			TT_NOTIF_SOUND: 'Jouer le son',
			TT_NOTIF_EXAMPLE: 'Exemple',
			BB_TITLE: 'Éclatement du Tonneau',
			BB_TIME: 'Temps jusqu\'à la Prochaine Rotation:',
			BB_ALT: 'Afficher les Heures',
			BB_DATE: 'Date',
			BB_WOODEN: 'Bois',
			BB_SILVER: 'Argent',
			BB_GOLD: 'Or',
		});
		$translateProvider.preferredLanguage('en');
		$translateProvider.useSanitizeValueStrategy('escaped');
	});
