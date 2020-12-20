SLUGIFY = TRANSFORMA UMA STRING EM UM SLUG, OU SEJA, SEM CARACTERES ESPECIAIS, ESPACO , ETC.

####################################################
TINYMCE = EDITOR DE TEXTO OPEN SOURCE 
link download https://www.tiny.cloud/get-tiny/self-hosted/

baixar o idioma
https://www.tiny.cloud/get-tiny/language-packages/


instalar e configurar o tinymce

<%- include ('../../partials/footer.ejs')%>
<script src="/tinymce/tinymce.min.js">
</script>
<script>
    tinymce.init({
        language:"pt_BR",
        selector: "#article",
        plugins:[
            'advlist autlink link image lists print preview hr searchreplace wordcount fullscreen insertdatetime media save table paste emoticons'
        ]
    })
</script>

############################################################
