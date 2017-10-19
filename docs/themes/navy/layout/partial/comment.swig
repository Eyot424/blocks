{% if page.comments && config.disqus_shortname %}
<section id="comments">
  <div id="disqus_thread"></div>
</section>
<script>
  var disqus_shortname = '{{ config.disqus_shortname }}';
  var disqus_url = '{{ url }}';
  var disqus_title = {{ JSON.stringify(page.title) }};
  var disqus_config = function(){
    this.language = '{{ disqus_lang() }}';
  };
</script>
{% endif %}
