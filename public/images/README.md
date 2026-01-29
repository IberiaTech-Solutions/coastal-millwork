# Image folders – where to save section images

All paths are under **`public/images/`**. Files here are served at `/images/...` (e.g. `public/images/home/design-engineering.jpg` → `/images/home/design-engineering.jpg`).

Use **JPG** or **WebP** for photos; **PNG** for graphics that need transparency. Keep filenames lowercase, use hyphens (e.g. `credit-one-stadium.jpg`).

---

## `hero/`
**Home page – hero / slideshow**
- Optional background image(s) for the top hero section.
- Example: `hero-bg.jpg`

---

## `home/`
**Home page – featured cards (Design & Engineering, Fabrication, Installation)**
- `design-engineering.jpg` – Design engineer at work
- `fabrication.jpg` – Beam saw and CNC / shop
- `installation.jpg` – Installation / field

---

## `about/`
**About Us page**
- `beam-saw.jpg` – Plant staff working the beam saw (first figure)
- `cnc-facility.jpg` – Beam saw and CNC / facility (second figure)

---

## `team/`
**Our Team page**
- `group.jpg` – Group photo of CMS team (top of page)
- **Individual portraits** (use name in filename, e.g. first name + last initial):
  - `chris-wagner.jpg`
  - `christian-datz.jpg`
  - `bonita-denney.jpg`
  - `kristin-ogren.jpg`
  - `cricket.jpg`
  - `ryan-lasalle.jpg`
  - `joe-fonseca.jpg`
  - `ricky-sweaney.jpg`
  - `jay-youngs.jpg`
  - `dave-comer.jpg`
  - `max-roth.jpg`
  - `elisabeth-beaty.jpg`

---

## `products/`
**Products page**
- `executive-workspace.jpg` – Executive work space figure

---

## `services/`
**Services page**
- `design-engineer.jpg` – Design engineer at work
- `exterior-storefronts.jpg` – Exterior store fronts

---

## `projects/`
**Projects gallery**
- One image per project (or several; filenames can match project slug):
  - `credit-one-stadium.jpg`
  - `spartanburg-judicial-center.jpg`
  - `charleston-place-hotel.jpg`
  - `international-african-american-museum.jpg`
  - `palmetto-bluff-montage.jpg`
  - `volvo-ridgeville.jpg`
  - … (add more as needed)

You can also use subfolders per project, e.g. `projects/credit-one-stadium/01.jpg`, `projects/credit-one-stadium/02.jpg`.

---

## Summary – quick reference

| Section   | Folder     | Examples |
|----------|------------|----------|
| Hero     | `images/hero/` | hero-bg.jpg |
| Home     | `images/home/` | design-engineering.jpg, fabrication.jpg, installation.jpg |
| About    | `images/about/` | beam-saw.jpg, cnc-facility.jpg |
| Team     | `images/team/` | group.jpg, chris-wagner.jpg, … |
| Products | `images/products/` | executive-workspace.jpg |
| Services | `images/services/` | design-engineer.jpg, exterior-storefronts.jpg |
| Projects | `images/projects/` | credit-one-stadium.jpg, spartanburg-judicial-center.jpg, … |

After you add images here, we can wire the app to use these paths instead of placeholders.
