/* http://www.netplusmedia.fr/animer-une-ancre-html-avec-jquery/detail.html */
jQuery().ready(function(){
 
 //animation des ancres
 $('a[href^=#]').click(function(){
 
 cible = $(this).attr('href');
 
 //on va supprimer le #
 cible = cible.substr(1 , (cible.length-1) );
 
 //hauteur où se trouve l'élément
 hauteur = $("a[name="+cible+"]").offset().top;
 
 //animation
 $(body).animate({scrollTop:hauteur} , '500', 'swing');
 
 return false;
 
 });
 
});

/* Afficher le bouton pour remonter en haut de la page au bout de 200px descendu */
jQuery(function()
{
    $(function () 
    {
        $(window).scroll(function () //Fonction appelée quand on descend la page
        { 
            if ($(this).scrollTop() > 200 ) // Quand on est à 200pixels du haut de page, affichage du bouton
            {  
                $('#scrollUp').css('right','10px'); // Replace à 10pixels de la droite, l'image "scrollTop"
            } else { 
                $('#scrollUp').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
            }
        });
    });
});

