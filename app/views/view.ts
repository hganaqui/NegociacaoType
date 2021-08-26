import { inspect } from "../decorators/inspect";
import { logarTempoExecucao } from "../decorators/logar-tempo-de-execucao";

export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
        }
    }

    @logarTempoExecucao(true)
    @inspect  
    public update(model: T): void {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}