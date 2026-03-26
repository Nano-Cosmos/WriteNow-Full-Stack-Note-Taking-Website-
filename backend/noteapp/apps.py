from django.apps import AppConfig

class NoteAppConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'noteapp'

    def ready(self):
        from django.contrib.auth import get_user_model
        User = get_user_model()

        if not User.objects.filter(username="admin").exists():
            User.objects.create_superuser(
                username="admin",
                email="admin@example.com",
                password="adminadmin78"
            )