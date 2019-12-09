function kw_list (){					
	this.keywords = new Array ();					
	this.num_words = 0;					
	this.query = "";					
	this.original_query = "";					
	this.query_length = 0;					
	this.possible_points = 0;					
	this.multiple = points_title + points_keywords + points_description;					
	this.get_words = get_query;					
	this.no_query = no_query_found;					
}					

function get_query (){	
	this.query = top.location.search.substring (top.location.search.indexOf ('=') + 1);	
	while ((the_plus = (this.query.indexOf ("+", 0))) != -1){	
		this.query_length = this.query.length;	
		this.query = this.query.substring (0, the_plus) + " " + this.query.substring (the_plus + 1);	
	}
	
	this.original_query = unescape (this.query);	
	this.query = this.original_query.toLowerCase ();	
	this.query_length = this.query.length;	
	if (this.query != ""){
		
		var query_pointer = 0;	
		var end_word = 0;	
		var at_end = 0;	
		while ((this.num_words <= (max_keywords - 1)) && (! at_end)){	
			end_word = this.query.indexOf (" ", query_pointer);
			
			if (end_word == query_pointer)	
			query_pointer++;
		
			else{	
				if (end_word >= (this.query_length - 1))
				at_end = 1;
			
				if (end_word != -1)	
				this.keywords[this.num_words] = (this.query.substring (query_pointer, end_word)).toLowerCase ();
			
				else{	
					this.keywords[this.num_words] = this.query.substring (query_pointer, this.query_length);	
					at_end = 1;
				}	
				this.num_words++;	
				if (query_pointer != -1)	
				query_pointer = end_word + 1;	
				if (query_pointer > (this.query_length - 1))	
				at_end = 1;
			}	
		}	
		if (this.num_words == 0)	
		return (0);	
		else{	
			this.possible_points = this.multiple * this.num_words;	
			return (1);	
		}	
	}	
	else	
	return (0);
}	
	
function no_query_found (){	
	document.writeln("<div class='pesquisa_branco'>");
		document.writeln ('<CENTER><P>Pesquisa em branco.</P></CENTER>');
	document.writeln("</div>");
}
	
function entry ( url, title, keywords, description){	
	this.url = url;	
	this.title = title;	
	this.keywords = keywords;	
	this.description = description;	
	this.points = 0;	
	this.search_entry = find_keyword;	
	this.print_entry = print_result;	
}
	
function find_keyword (the_word){	
	var the_title = this.title.toLowerCase ();	
	var the_keywords = this.keywords.toLowerCase ();	
	var the_description = this.description.toLowerCase ();	
	if ((the_title.indexOf (the_word)) != -1)	
	this.points += points_title;	
	if ((the_keywords.indexOf (the_word)) != -1)	
	this.points += points_keywords;	
	if ((the_description.indexOf (the_word)) != -1)	
	this.points += points_description;	
}

function print_result (possible_points){
	document.writeln("<div class='resultado_geral'>");					
		document.writeln("<div class='style_resultado'>");			
			document.writeln('<a class="style_resultado_link" href="' + this.url + '">' + this.title + '</a> ' + this.description);
		document.writeln("</div>");
	document.writeln("</div>");
}	
	
function no_entry_printed (the_query){	
	document.writeln("<div class='nao_ocorrencia'>");
		document.writeln (
			"<CENTER><P> Não há ocorrencia da palavra <U><B>" + the_query + "</B></U>.</P></CENTER>"); 
	document.writeln("</div>");
}
	
function print_intro (the_query){
	document.writeln("<div class='ocorrencia'>");	
		document.writeln ("<CENTER><P>Os resultados da pesquisa por <U><B>" + the_query + "</B></U> são:</P></CENTER>");
		document.writeln("<div class='separar_ocorrencia'>");
		document.writeln("");
		document.writeln("</div>");
	document.writeln("</div>");
}
	
function begin_search (){	
	var key_list = new kw_list;	
	var entry_printed = 0;	
	if (! key_list.get_words ())	
	key_list.no_query ();

	else{	
		var counter = 0;	
		var counter2 = 0;	
		for (counter = 0; counter < entry_num; counter++)	
		for (counter2 = 0; counter2 <= (key_list.num_words - 1); counter2++)	
			the_entries[counter].search_entry (key_list.keywords[counter2]);
		
		for (counter = key_list.possible_points; counter > 0; counter--){                                                               
			for (counter2 = 0; counter2 < entry_num; counter2++){
				if (counter == the_entries[counter2].points){
					if (entry_printed != 1){
						entry_printed = 1;
						print_intro (key_list.original_query);
					}
					the_entries[counter2].print_entry (key_list.possible_points);
				}
			}
		}
		if (! entry_printed)
		no_entry_printed (key_list.original_query);	
	}
}	

the_entries = new Array ();
	
	//aqui vai as entradas para a pesquisa	
	the_entries[0] = new entry ("paginas/a.html","A", " ","");	
	the_entries[1] = new entry ("paginas/abacate.html","Abacate","","");	
	
	
	//abaixo vai o número de entradas existentes	
	var entry_num = 2; //aumenta de acordo com as opções de busca no caso 2 ate agora	
	var max_keywords = 2; //aumenta de acordo com as opções de busca no caso 2 ate agora	
	var points_title = 2; //aumenta de acordo com as opções de busca no caso 2 ate agora	
	var points_keywords = 2; //aumenta de acordo com as opções de busca no caso 2 ate agora	
	var points_description = 1;	
	begin_search ();




