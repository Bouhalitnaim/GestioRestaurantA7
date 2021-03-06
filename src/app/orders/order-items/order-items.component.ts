import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {OrderItem} from '../../shared/order-item.model';
import {ItemService} from '../../shared/item.service';
import {Item} from '../../shared/item.model';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styles: []
})
export class OrderItemsComponent implements OnInit {
   formData:OrderItem;
   itemList:Item[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef:MatDialogRef<OrderItemsComponent>,
    private itemService:ItemService) {}

  ngOnInit() {
    this.itemService.getItemList().then(res => this.itemList = res as Item[]);

    this.formData={
      OrderItemID:null,
      OrderID: this.data.OrderID,
      ItemID: 0,
      NameItem:'',
      Price:0,
      Quantity:0,
      Total:0

    }
  }

}
