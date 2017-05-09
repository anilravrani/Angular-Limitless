interface IComponent {

    title: string;
    placeholder_code: string;
    prefix_url: string;
    isEdit: boolean;
    isLoading: boolean;
    filtering: any;
    range_date: any[];
    header: any;
    modal: any;
    action_data: any;

    /** Date Picker */
    datepickerSettings: any;
    datepicker_from: Date;
    datepicker_to: Date;
    datepickerToOpts: any;
    handleDateFromChange(dateFrom: Date): void;
    clearDate(event: any, field: string): void;

    /** Data */
    loadData(): void;
    reloadData(arr_data: any[]): void;
    reloadDataSearch(arr_data: any[]): void;
    refreshData(): void;

    /** CRUD */
    loadOne(id: number): void;
    addOne(): void;
    updateOne(): void;
    deactivateOne(id: number): void;
    deleteOne(id: number): void;

    /** Search */
    displayColumn(): void;
    search(): void;
    clearSearch(): void;

    /** Action */
    clearOne(): void;
    displayEditBtn(status: boolean): void;
    changeLoading(status: boolean): void;
    fillDataModal(id: number): void;
    confirmDeactivateOne(id: number): void;
    validateOne(): boolean;
    actionCrud(obj: any): void;
}
