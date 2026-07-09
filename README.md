# PAO Trainer

Trainings-app voor het PAO-geheugensysteem (persoon · actie · object, 00–99 en 52 speelkaarten).
Gebouwd als één zelfstandig HTML-bestand — geen build, geen dependencies.

**App:** https://ramacor.github.io/pao-trainer/

- Randomiser met reactietijd-tracking en spaced repetition
- Workouts, reeks-proef, tempodrills, uitgesteld terughalen
- Bibliotheek met bulk-import (Excel/CSV) en system-builder wizard
- Kaartenmodus, foto's per beeld, NL/EN, licht/donker
- Optionele cloud-sync via een geheime synccode (data lokaal, sync via Supabase)

Data staat lokaal op je apparaat (localStorage/IndexedDB); cloud-sync is opt-in.
