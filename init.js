function generate() {
    var width = $('input:radio[name=width]:checked').val();
    var color = $('input:radio[name=color]:checked').val();
    var transparency = $('input:radio[name=transparency]:checked').val();
    item = new TextCheck();

    item.mode = "markdown";
    item.setWidth(width);
    item.setColor(color);
    item.setTransparency(transparency);
    code = item.getWord($('#in').val().toString().toLowerCase());
    $('#out').val(code);

    item.mode = "html";
    item.setWidth(width);
    item.setColor(color);
    item.setTransparency(transparency);
    previewCode = item.getWord($('#in').val().toString().toLowerCase());
    $('#preview').html(previewCode);

    return true;
}

$("#out").focus(function() {
    var $this = $(this);
    $this.select();

    // Work around Chrome's little problem
    $this.mouseup(function() {
        // Prevent further mouseup intervention
        $this.unbind("mouseup");
        return false;
    });
});