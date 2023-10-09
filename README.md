# PracticaPW_C2
### Comando básicos de GitHub
```
git init
```
> Inicialización del repositorio en la carpeta donde está el proyecto
```
git clone <url>
```
> Permite copiar repositorios existentes y trabajar únicamente sobre la versión clonada
```
git add 
```
> Añade archivos al área de ensayo permitiendo construir series instantáneas de los archivos creados o modificados en el proyecto antes de guardarlos en el historial del proyecto 
```
git commit -m “Texto relevante del commit”
```
> Permite hacer instantáneas del estado actual del trabajo y guardar los cambios 
```
git push <origin> <branch>
```
> Sube el contenido de un repositorio local a un repositorio central, este comando sobreescribe los cambios se utiliza para comunicar con otro repositorio, calcular lo que la base de datos local tiene que la remota no tiene y subir la diferencia al otro repositorio. 
```
git pull <origin> <branch>
```
> Descarga el contenido de un repositorio remoto y actualizar el repositorio local
```
git branch <name>
```
> Permite crear, enumerar, editar y eliminar ramas
```
git checkout <nombre-de-la-rama>
```
> Sirve para cambiar de una rama a otra y poder trabajar desde esta. También se puede usar para chequear archivos y commits.
```
git status
```
> Nos arroja toda la información necesaria de la rama, por ejemplo:
> - Si está actualizada.
> - Si existe algún pull pendiente.
> - Si archivos se encuentran en stage, unstage o untracked.
> - Si se crearon, modificaron o eliminaron archivos.
```
git revert
```
> Sirve para eliminar un commit anterior
```
git merge
```
> Permite tomar las líneas independientes de desarrollo creadas por git branch e integrarlas en una sola rama
```
git stash
```
> Almacena temporalmente los cambios efectuados en el código para poder retomarlo posteriormente y aplicar los cambios
```
git log
```
> Consultar el historial del repositorio 
