from django.http import HttpResponse
from django.template import loader

def index(request):
    template = loader.get_template('web/index.html')
    context = {
        'teste': 'teste',
    }
    return HttpResponse(template.render(context, request))