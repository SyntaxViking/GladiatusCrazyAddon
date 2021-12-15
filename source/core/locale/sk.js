/*
 * Gladiatus Crazy Addon Translation
 * Name : Slovak
 * Code : [none]
 * Tag  : sk
 * Translator: TraiaN, Maximus
 */

// Languages Object
var gca_languages = gca_languages || {};

// Set Language
gca_languages['sk'] = {
	name : 'Slovenský (Slovak)',
	translators : ["TraiaN", "Maximus"],
	locale : {
		info : {
			description : "Gladiatus Crazy Addon!"
		},
		general : {
			days : "dní",
			minutes : "minút",
			no_data : "Žiadne dáta",
			confirm : "Potvrdiť",
			cancel : "Zrušiť",
			close : "Ukončiť",
			error : "Chyba"
		},
		global : {
			life_potion_use : "Použiť nápoj zdravia",
			life_potion_used : "Bol použitý nápoj zdravia",
			life_potion_left : "Môžte ešte použiť {{number}} nápoj(e,ov) zdravia",
			life_recover_full : "Plná obnova života za",
			message_private_write : "Napísať súkromnú správu",
			message_guild_write : "Napísať spolkovú správu",
			message_send : "Odoslať",
			message_sent_success : "Spolková správa bola odoslaná",
			message_sent_failed : "Odoslanie spolkovej správy zlyhalo",
			message_empty : "Spolkové správa je prázdna",
			message_exclude_me : "Vynechať ma",
			guild_market_goto : "Spolok - Trh",
			guild_storage_goto : "Spolok - Sklad",
			guild_bank_goto : "Spolok - Banka",
			guild_warcamp_goto : "Spolok - Sídlo Domínia",
			guild_jail_goto : "Spolok - Negotium X",
			guild_library_goto : "Spolok - Knižnica",
			guild_medic_goto : "Spolok - Villa Medici",
			simulator_goto : "Simulátor boja",
			stats_display : "Zobraziť moje štatistiky",
			online_display : "Zobraziť online hráčov",
			online_friends : "Online Priatelia",
			guild_friends : "Spolok",
			family_friends : "Rodina",
			donate_gold_confirm : "Naozaj chcete darovať {{number}} zlata?",
			donate_gold_success : "Tvoje zlato bolo darované",
			donate_gold_failed : "Darovanie tvojho zlata zlyhalo",
			donate_gold_no_gold : "Nie je zlato na darovanie",
			donate_gold_all_gold : "Spolok - Vložiť všetko zlato",
			quest_full : "Plný",
			quest_new : "Úloha",
			pray_start : "Stlačením tlačidla - začať modlenie",
			pray_stop : "Stlačením tlačidla - ukončiť modlenie",
			heal : "liečiť",
			notification_guild_application : "Nová žiadosť do spolku!",
			low_durability_items : "{{number}} predmet(y,ov) s opotrebením pod {{percent}}%",
			gold_exp_data : "Zlato a Skúsenosti - Údaje",
			gold_exp_data_today : "za 24 hodín",
			gold_exp_data_week : "za 7 dní",
			gold_exp_data_avg_day : "Priemerné hodnoty za deň",
			gold_exp_data_to_level_up : "Nová úroveň za x/dní",
			gold_exp_data_package_tax : "Uložené zlato do balíkov za týždeň",
			gold_exp_data_measurements : "Meranie",
			gold_exp_data_total_exp : "Všetky skúsenosti",
			gold_exp_data_total_gold : "Všetko zlato"
		},
		overview : {
			stats_difference : "Rozdiel",
			drop_item_see_materials_repair : "Presun predmetu k zobrazeniu potrebných surovín na jeho opravu",
			workbench_6th_slot_empty : "6 slot v opravovni musí byť prázdny"
		},
		pantheon : {
			mysterybox_open_all : "Otvoriť všetky",
			mysterybox_open_stop : "Stop",
			mysterybox_open_done : "Hotovo!"
		},
		guild : {
			bank_all_gold : "Vložiť všetko zlato",
			library_per_point_cost : "Cena za skúsenostný bod",
			library_gold_left : "Spolkové zlato na aktiváciu",
			medic_lost_points : "Stratené body života",
			medic_points_to_heal : "Body na vyliečenie",
			medic_life_after_heal : "Body života po liečení"
		},
		expedition : {
			material_drop_chance : "{{number}}% šanca na nájdenie suroviny"
		},
		training : {
			stats_points : "Vedomostné body",
			points_breakdown : "Body - Výpočet",
			stats_calculated_with_yourself_as_an_opponent : "* Štatistiky sú počítané pri útoku sám na seba.",
			total_cost : "Celková cena",
			costs_discount : "Zľava na tréning: {{number}}%"
		},
		auction : {
			items_info : "Informácie o predmetoch",
			number_of_items : "Počet predmetov : {{number}}",
			number_of_bided_items : "Počet aktívnych ponúk : {{number}}",
			hide_your_gold_here : "Vložiť zlato",
			price_value_function : "Cena = Hodnota + {{number}}",
			levels_you_can_see : "Môžete vydieť predmety od úrovne {{min}} do úrovne {{max}}."
		},
		markets : {
			item_cost_only_x_gold : "Tento predmet stojí len {{number}} zlata.",
			item_is_soulbound : "Tento predmet je zviazaný s hráčom.",
			are_you_sure_you_want_to_buy : "Naozaj chcete tento predmet kúpiť?"
		},
		forge : {
			forge_ended : "Kovanie ukončené!",
			recraft_item : "Znovu vytvoriť predmet"
		},
		packages : {
			event_items : "Eventové predmety",
			known_scroll : "Tento návod už ovládaš",
			unknown_scroll : "Tento návod ešte neovládaš"
		},
		settings : {
			settings : "Nastavenie",
			description : "Povolením alebo zakázaním položiek nastavte addon podľa seba!",
			description_click_button : "Kliknutím na tlačítko prejsť k nastaveniu addonu...",
			category_global : "Hlavné nastavenia",
			category_overview : "Prehľad",
			category_messages : "Správy",
			category_packages : "Balíky",
			category_pantheon : "Pantheón",
			category_reports : "Správy z boja",
			category_training : "Cvičisko",
			category_merchants : "Obchodníci",
			category_forge : "Vyhňa",
			category_arena : "Aréna",
			category_magus : "Veľký mág",
			category_market : "Trh",
			category_expedition : "Expedície",
			category_guild : "Spolok",
			category_auction : "Aukčná budova",
			category_events : "Eventy",
			category_sound : "Zvuk",
			category_sound$cooldown_sound_notifications : "Zvukové oznámenie (expedícia, žalár, aréna)",
			category_data : "Údaje",
			category_global$language_select : "Jazyk addonu",
			category_global$sound_notifications : "Zvukové upozornenia",
			category_global$browser_notifications : "Upozornenia prehliadača",
			category_global$extended_hp_xp_info : "Rozšírené informácie o HP a XP na hlavnej lište",
			category_global$extended_hp_xp_info_potion : "Ikona Nápoj zdravia",
			category_global$hp_timer_for_full_life : "Zobraziť minúty do úplnej obnovy zdravia",
			category_global$shortcuts_bar : "Hlavná lišta",
			category_global$shortcuts_bar_buttons : "Vyberte odkazy pre panel odkazov",
			category_global$auction_status_bar : "Informačná lišta aukcie",
			category_global$auction_status_notification : "Upozornenie na zmenu stavu aukcie",
			category_global$top_fixed_bar : "Horná rolovacia lišta",
			category_global$advance_main_menu : "Vylepšiť hlavné menu",
			category_global$submenu_click_to_change : "Zmeniť podmenu kliknutím",
			category_global$remember_tabs : "Pamätať si záložky v inventári a v obchode",
			category_global$attacked_timers : "Časovač útokov",
			category_global$quest_timer : "Stav úloh alebo časovač",
			category_global$merchants_timer : "Čas obchodníkov",
			category_global$forge_timers : "Časovač Vyhňa / Pec",
			category_global$notify_new_guild_application : "Informovať ma o novej žiadosti vstupu do spolku",
			category_global$notify_new_guild_application_interval : "Kontrola žiadostí každých (minút)",
			category_global$x_scroll : "Povoliť horizontálne rolovanie Gladiatus",
			category_global$item_shadow : "Tieňovanie predmetov",
			category_global$inventory_options_group : "Zoskupiť nastavenia inventára",
			category_global$inventory_gold_info : "Hodnota predmetov v inventári",
			category_global$pagination_layout : "Zmena rozhrania políčok inventára",
			category_global$gold_exp_data : "Údaje Zlato a Skúsenosti",
			category_global$pray_shorcut : "Čas pobytu v Podsvetí",
			category_global$centurio_powerups_timers : "Časovač Centurio na tlačítku Prémium",
			category_global$show_durability : "Opotrebenie v ľavom dolnom rohu predmetu",
			category_global$min_durability : "Informovať o predmetoch s opotrebením pod _% (deaktivácia, presun na 0)",
			category_overview$analyze_items : "Analýza stavu predmetu (potrebné pre tréning)",
			category_overview$food_life_gain : "Zobraziť prírastok života z jedla",
			category_overview$block_avoid_caps : "Zobraziť Blokovanie a Odolnosť",
			category_overview$best_food : "Zvýrazniť najlepšie jedlo",
			category_overview$overfeed_food : "Stmaviť jedlo z nadmerným liečením",
			category_overview$daily_bonus_log : "Zaznamenať denný bonus",
			category_overview$buffs_detailed_time : "Podrobné časovače pre spolkové bonusy",
			category_overview$mercenaries_manager : "Správca otrokov",
			category_overview$mercenary_tooltip_show : "Zobraziť u otrokov popisy",
			category_overview$more_statistics : "Rozšírené zobrazenie vlastností hráča",
			category_overview$achivements_layout : "Vylepšiť rozhranie úspechov",
			category_overview$costumes_layout : "Vylepšiť rozhranie kostýmov",
			category_overview$items_repair_overview : "Identifikátor potrebných surovín na opravu",
			category_messages$messages_layout : "Rozšírené zobrazenie správ",
			category_messages$show_unread : "Zvýrazniť neprečítané správy",
			category_messages$separate_days : "Oddeliť správy z rôznych dní",
			category_messages$more_guild_mate_info : "Rozšírené info o spolkových hráčoch",
			category_messages$show_message_links : "Zobraziť odkazy obsiahnuté v správach",
			category_messages$get_guild_battle_info : "Automatické načítanie výsledkov spolkovej vojny",
			category_messages$show_sidebar : "Zobraziť bočný panel správ",
			category_messages$fix_header_links : "Opraviť chybu kliknutím na názov správy",
			category_messages$new_message_focus : "Nastavenie okamžitého písania obsahu správy",
			category_messages$new_message_friend_list : "Povoliť tlačítko Zoznam priateľov",
			category_packages$filters_layout : "Vylepšené rozhranie filtra",
			category_packages$compact_info_layout : "Kompaktné rozloženie informácií",
			category_packages$items_layout : "Vylepšiť rozloženie predmetov",
			category_packages$load_more_pages : "Načítať viac stránok",
			category_packages$pages_to_load : "Počet stránok na načítanie",
			category_packages$item_price : "Zobraziť cenu predmetu",
			category_packages$special_category_features : "Povoliť špeciálne funkcie pre každú kategóriu",
			category_pantheon$quests_reorder : "Povoliť zoskupovanie úloh",
			category_pantheon$quests_detailed_rewards : "Zobraziť podrobné odmeny za úlohy",
			category_pantheon$missions_show_completed : "Zobraziť dokončené úlohy",
			category_pantheon$gods_show_points_percent : "Zobraziť percentá pri bodoch bohov",
			category_pantheon$open_many_mysteryboxes : "Viacnásobné otvorenie Truhlice božej priazne",
			category_pantheon$show_mysterybox_rewards_rubies : "Zobraziť pri odmene z truhlice hodnotu v rubínoch",
			category_reports$style_change : "Vylepšený vzhľad výpisu správ",
			category_reports$load_loot_tooltips : "Načítať každú odmenu v správach",
			category_reports$found_items : "Zhromažďovať údaje o nájdených predmetoch",
			category_training$show_discount : "Zobraziť zľavu na tréning",
			category_training$show_basics_in_bars : "Zobraziť základy v baroch",
			category_training$multiple_train : "Povoliť viacnásobné trénovanie",
			category_training$calculator_train : "Kalkulačka nákladov",
			category_training$show_analyze_items_data : "Zobraziť údaje analyzovaných predmetov v popisoch",
			category_training$show_points_after_upgrade : "Zobraziť vedomostné body po vylepšení",
			category_merchants$fade_unaffordable_items : "Stmaviť predmety, ktoré nie je možné kúpiť",
			category_forge$material_links : "Odkazy Balíky/Trh na potrebné suroviny pre (Vyhňa/Opravovňa)",
			category_forge$show_levels : "Vyhňa - zobraziť úroveň pri Prefix/Sufix/Predmet",
			category_arena$ignore_attack_confirmations : "Ignorovať potvrdenie o útokoch (správa viac ako 5 útokov atď.)",
			category_arena$show_simulator_imagelink : "Zobraziť obrázok-odkaz na simulátor boja (simulator.dinodevs.com)",
			category_magus$fade_unimprovable_items : "Stmaviť predmety ktoré nie je možné vylepšiť",
			category_market$soulbound_warning : "Potvrdenie pri kúpe predmetov zviazaných s dušou.",
			category_market$one_gold_warning : "Potvrdenie pri kúpe predmetov za cenu 1 zlato",
			category_market$cancel_all_button : "Zobraziť tlačítko Zrušiť všetko",
			category_market$remember_sell_duration : "Zapamätať si čas posledného predaja",
			category_market$sell_duration : "Vybrať predvolené trvanie predaja",
			category_market$one_gold_mode : "Tlačidlo zmeniť cenu predaja prepnúť vždy na 1 zlato",
			category_market$remember_sort : "Vybrať predvolené trvanie predaja",
			category_expedition$show_enemy_drops : "Zobraziť suroviny padajúce z nepriateľov",
			category_expedition$underworld_layout : "Zobraziť v podsvetí rozhranie z výprav",
			category_guild$jail_layout : "Vylepšené zobrazenie Negotia X",
			category_guild$library_layout : "Vylepšené zobrazenie knižnice",
			category_guild$library_fade_non_scrolls : "Stmaviť predmety ktoré nie je možné pridať do knižnice",
			category_guild$library_tooltip_data : "Viac údajov v popisoch v knižnici",
			category_guild$bank_donate_layout : "Vylepšené zobrazenie banky",
			category_guild$bank_book_layout : "Vylepšené zobrazenie knihy príspevkov v banke",
			category_guild$medic_layout : "Vylepšené zobrazenie vo Ville Medici",
			category_auction$items_counters : "Zobraziť počet predmetov",
			category_auction$more_search_levels : "Zobraziť ďalšie úrovne v možnostiach vyhľadávania",
			category_auction$item_price_analyze : "Analýza ceny predmetu",
			category_auction$item_level : "Zobraziť úroveň predmetu",
			category_auction$x3_items_per_line : "Zobraziť 3 predmety na riadok",
			category_auction$multi_bids : "Pridať viac ponúk bez obnovy stránky",
			category_auction$extra_item_stats : "Zobraziť ďalšie štatistiky o obrázku predmetov",
			category_events$craps_timer : "Zobraziť časovač pre udalosť s kockami v hornej časti",
			category_events$server_quest_timer : "Zobraziť časovač pre serverové akcie a eventy v hornej časti",
			category_sound$enabled : "Povoliť zvukový systém",
			category_sound$muted : "Stlmiť / Zrušiť zvuk",
			category_sound$volume : "Hlasitosť zvuku",
			category_data$export_settings : "Export údajov nastavení do súboru",
			category_data$import_settings : "Import údajov nastavení zo súboru",
			category_data$reset_settings : "Reset nastavení addonu",
			category_data$clear_data : "Zmazať všetky údaje addonu",
			save : "Uložiť",
			export : "Export",
			import : "Import",
			reset : "Reset",
			clear : "Vymazať",
			do_not_show : "Nezobrazovať",
			show_as : "Zobraziť ako",
			translated_percent : "Preložené na: {{number}}%",
			translated_by : "Preklad: {{string}}",
			reset_settings_confirm : "Naozaj chcete resetovať nastavenia addonu?",
			clear_data_confirm : "Naozaj chcete vymazať všetky údaje addonu?",
			notification_reload : "Aby sa zmeny prejavili, znovu načítajte stránku"
		}
	}
}

gca_languages._active = "sk";
