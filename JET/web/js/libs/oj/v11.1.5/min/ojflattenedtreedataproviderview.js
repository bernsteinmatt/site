/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore-base","ojs/ojset","ojs/ojeventtarget","ojs/ojkeyset","ojs/ojobservable","ojs/ojmap"],function(t,e,s,i,a,r){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r;
/**
     * @preserve Copyright 2013 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
class h{constructor(t,e){this.dataProvider=t,this.options=e,this.AsyncIterable=class{constructor(t,e){this._parent=t,this._asyncIterator=e,this[Symbol.asyncIterator]=()=>this._asyncIterator}},this.AsyncIterator=class{constructor(t,e,s){this._parent=t,this._nextFunc=e,this._params=s}next(){return this._nextFunc(this._params)}},this.AsyncIteratorYieldResult=class{constructor(t,e){this._parent=t,this.value=e,this.value=e,this.done=!1}},this.AsyncIteratorReturnResult=class{constructor(t,e){this._parent=t,this.value=e,this.value=e,this.done=!0}},this.Item=class{constructor(t,e,s){this._parent=t,this.metadata=e,this.data=s,this.metadata=e,this.data=s}},this.FlattenedTreeItemMetadata=class{constructor(t,e,s,i,a,r){this._parent=t,this.key=e,this.parentKey=s,this.indexFromParent=i,this.treeDepth=a,this.isLeaf=r,this.key=e,this.parentKey=s,this.indexFromParent=i,this.treeDepth=a,this.isLeaf=r}},this.FetchListResult=class{constructor(t,e,s,i){this._parent=t,this.fetchParameters=e,this.data=s,this.metadata=i,this.fetchParameters=e,this.data=s,this.metadata=i}},this.FetchByOffsetParameters=class{constructor(t,e,s,i,a,r){this._parent=t,this.offset=e,this.size=s,this.sortCriteria=i,this.filterCriterion=a,this.attributes=r,this.offset=e,this.size=s,this.sortCriteria=i,this.filterCriterion=a,this.attributes=r}},this.FetchByOffsetResults=class{constructor(t,e,s,i){this._parent=t,this.fetchParameters=e,this.results=s,this.done=i,this.fetchParameters=e,this.results=s,this.done=i}},this.FetchByKeysResults=class{constructor(t,e,s){this._parent=t,this.fetchParameters=e,this.results=s,this.fetchParameters=e,this.results=s}},this.DataProviderMutationEventDetail=class{constructor(t,e,s,i){this._parent=t,this.add=e,this.remove=s,this.update=i,this.add=e,this.remove=s,this.update=i}},this.DataProviderRefreshEventDetail=class{constructor(t){this.disregardAfterKey=t,this.disregardAfterKey=t}},this.DataProviderOperationEventDetail=class{constructor(t,e,s,i,a){this._parent=t,this.keys=e,this.metadata=s,this.data=i,this.indexes=a,this.keys=e,this.metadata=s,this.data=i,this.indexes=a}},this.DataProviderAddOperationEventDetail=class{constructor(t,e,s,i,a,r,h){this._parent=t,this.keys=e,this.afterKeys=s,this.addBeforeKeys=i,this.metadata=a,this.data=r,this.indexes=h,this.keys=e,this.afterKeys=s,this.addBeforeKeys=i,this.metadata=a,this.data=r,this.indexes=h}},null==this.options&&(this.options={}),this.options.expanded||(this.options.expanded=new i.ExpandedKeySet([])),this._expandedObservable=new a.BehaviorSubject(this._getExpandedObservableValue(this.options.expanded,Promise.resolve())),this.dataProvider.addEventListener("mutate",this._handleUnderlyingMutation.bind(this)),this.dataProvider.addEventListener("refresh",this._handleUnderlyingRefresh.bind(this)),this._cache=[],this._iterators=new r,this._done=!1}_handleUnderlyingMutation(e){let s=null,i=null,a=null;const r=e.detail.add;if(r&&r.data&&r.data.length){const t=[],e=[],i=[],a=[],h=[],n=new Set,o=new Set;r.parentKeys.forEach((s,a)=>{var n,d;if(null===s||this._isExpanded(s)&&this._getItemByKey(s)){let c;if((null===(n=null==r?void 0:r.addBeforeKeys)||void 0===n?void 0:n.length)>0)if(null===s){if(null!==r.addBeforeKeys[a]){c=this._getItemIndexByKey(r.addBeforeKeys[a])-1}else c=this._cache.length}else{c=this._getItemIndexByKey(s)+this._getLocalDescendentCount(s),c===this._cache.length-1&&(c+=1)}else if((null===(d=null==r?void 0:r.indexes)||void 0===d?void 0:d.length)>0){const t=this._getItemIndexByKey(s);c=-1===t?r.indexes[a]+1:t+this._getLocalDescendentCount(s)+1}else c=this._getItemIndexByKey(this._getLastItemByParentKey(s).metadata.key)+1;const l=this._updateItemMetadata(new this.Item(this,r.metadata[a],r.data[a]),s,r.indexes[a]);this._spliceItemToCache(l,c),e.push(l.data),t.push(l.metadata),i.push(c+1),h.push(s),o.add(r.metadata[a].key),this._incrementIteratorOffset(c)}}),s=new this.DataProviderAddOperationEventDetail(this,o,n,a,t,e,i)}const h=e.detail.remove;if(h&&h.data&&h.data.length){const t=h.metadata.map(t=>t.key),e=[],s=[],a=[],r=new Set;t.forEach(t=>{const i=this._getLocalDescendentCount(t)+1,h=this._getItemIndexByKey(t);this._cache.splice(h,i).forEach((t,i)=>{r.add(t.metadata.key),e.push(t.metadata),s.push(t.data),a.push(h+i),this._decrementIteratorOffset(h)})}),i=new this.DataProviderOperationEventDetail(this,r,e,s,a)}const n=e.detail.update;if(n&&n.data&&n.data.length){const t=[],e=[],s=[],i=new Set;n.metadata.forEach((a,r)=>{const h=this._getItemByKey(a.key);if(null!=h){const o=this._getItemIndexByKey(a.key),d=n.data[r],c=new this.FlattenedTreeItemMetadata(this,n.metadata[r].key,h.metadata.parentKey,h.metadata.indexFromParent,h.metadata.treeDepth,null===this.getChildDataProvider(n.metadata[r].key));this._cache.splice(o,1,new this.Item(this,c,d)),i.add(n.metadata[r].key),t.push(c),e.push(d),s.push(o)}}),a=new this.DataProviderOperationEventDetail(this,i,t,e,s)}const o=new this.DataProviderMutationEventDetail(this,s,i,a);this.dispatchEvent(new t.DataProviderMutationEvent(o))}_handleUnderlyingRefresh(){this._clearCache(),this.dispatchEvent(new t.DataProviderRefreshEvent)}_getExpandedObservableValue(t,e){return{value:t,completionPromise:e}}getChildDataProvider(t,e){return this.dataProvider.getChildDataProvider(t,e)}containsKeys(t){return this.dataProvider.containsKeys(t)}fetchByKeys(t){return this.dataProvider.fetchByKeys(t).then(t=>{const e=new r;return t.results.forEach((t,s)=>{const i=this._getItemByKey(s);i?e.set(s,i):e.set(s,t)}),new this.FetchByKeysResults(this,t.fetchParameters,e)})}fetchByOffset(t){const e=null!=t?t.size:-1,s=null!=t?t.sortCriteria:null,i=null!=t&&t.offset>0?t.offset:0,a=null!=t?t.filterCriterion:null,r=null!=t?t.attributes:null;return t=new this.FetchByOffsetParameters(this,i,e,s,a,r),this._isSameCriteria(s,a)?this._checkCacheByOffset(t)&&Promise.resolve(this._getFetchByOffsetResultsFromCache(t)):(this._clearCache(),this._currentSortCriteria=s,this._currentFilterCriteria=a),this._fetchByOffset(t)}fetchFirst(t){this._fetchSize=null!=t?t.size:-1;const e=null!=t?t.sortCriteria:null,s=null!=t?t.filterCriterion:null,i=null!=t?t.attributes:null;this._isSameCriteria(e,s)||(this._currentSortCriteria=e,this._currentFilterCriteria=s,this._clearCache());const a=()=>{const t=this._iterators.get(r);let a=new this.FetchByOffsetParameters(this,t,this._fetchSize,e,s,i);return this.fetchByOffset(a).then(e=>{const s=e.results,i=s.map(t=>t.data),h=s.map(t=>t.metadata),n=0===i.length||e.done;return this._isSameCriteria(e.fetchParameters.sortCriteria,e.fetchParameters.filterCriterion)||(a.sortCriteria=e.fetchParameters.sortCriteria,a.filterCriterion=e.fetchParameters.filterCriterion),this._iterators.set(r,t+h.length),n?new this.AsyncIteratorReturnResult(this,new this.FetchListResult(this,a,i,h)):new this.AsyncIteratorYieldResult(this,new this.FetchListResult(this,a,i,h))})},r=new this.AsyncIterable(this,new this.AsyncIterator(this,a,t));return this._iterators.set(r,0),r}getCapability(t){return this.dataProvider.getCapability(t)}getTotalSize(){return Promise.resolve(-1)}isEmpty(){return this.dataProvider.isEmpty()}_isSameCriteria(t,e){if(t){if(!this._currentSortCriteria||t[0].attribute!=this._currentSortCriteria[0].attribute||t[0].direction!=this._currentSortCriteria[0].direction)return!1}else if(this._currentSortCriteria)return!1;if(e){if(!this._currentFilterCriteria||e[0].op!=this._currentFilterCriteria[0].op||e[0].filter!=this._currentFilterCriteria[0].filter)return!1}else if(this._currentFilterCriteria)return!1;return!0}_checkCacheByOffset(t,e){if(-1===t.size&&!0===this._done)return!0;if(null!=e){if(this._getLocalDescendentCount(e)>=t.size&&-1!==t.size)return!0}else if(this._cache.length>=t.offset+t.size&&-1!==t.size)return!0;return!1}_getFetchByOffsetResultsFromCache(t){const e=this._cache.slice(t.offset,-1===t.size?void 0:t.offset+t.size);let s=!1;return 0==e.length&&(this._lastParams&&this._lastParams==t?s=!0:this._lastParams=t),new this.FetchByOffsetResults(this,t,e,s)}_clearCache(){this._cache=[]}_fetchByOffset(t){if(0===this._cache.length){const e=-1===t.size?-1:t.offset+t.size,s=new this.FetchByOffsetParameters(this,0,e,t.sortCriteria,t.filterCriterion,t.attributes);return this._fetchChildrenByOffsetFromDataProvider(s,this.dataProvider,null,t).then(t=>t.fetchResult)}const e=this._getLastEntry();let s=e.metadata.key,i=0;!e.metadata.isLeaf&&this._isExpanded(s)||(s=e.metadata.parentKey,i=e.metadata.indexFromParent+1);const a=null===s?this.dataProvider:this.getChildDataProvider(s),r=this._getRemainingSize(t),h=new this.FetchByOffsetParameters(this,i,r,t.sortCriteria,t.filterCriterion,t.attributes);return this._fetchChildrenByOffsetFromAncestors(h,a,s,t).then(t=>t.fetchResult)}_fetchChildrenByOffsetFromAncestors(t,e,s,i,a){const r=(e,s)=>{const h=this._getItemByKey(e);if(this._checkCacheByOffset(i,a)||s.done&&null===e||null===h)return Promise.resolve();const n=h.metadata.parentKey,o=h.metadata.indexFromParent,d=null===n?this.dataProvider:this.getChildDataProvider(n),c=new this.FetchByOffsetParameters(this,o+1,this._getRemainingSize(i),t.sortCriteria,t.filterCriterion,t.attributes);return this._fetchChildrenByOffsetFromDataProvider(c,d,n,i,a).then(r.bind(this,n))};return this._fetchChildrenByOffsetFromDataProvider(t,e,s,i,a).then(r.bind(this,s)).then(()=>({fetchResult:this._getFetchByOffsetResultsFromCache(i)}))}_fetchChildrenByOffsetFromDataProvider(t,e,s,i,a){const r=e=>{const h=e.results;if(this._isSameCriteria(e.fetchParameters.sortCriteria,e.fetchParameters.filterCriterion)||(i.sortCriteria=e.fetchParameters.sortCriteria,i.filterCriterion=e.fetchParameters.filterCriterion),0===h.length||this._checkCacheByOffset(i,a))return a&&!0===e.done?Promise.resolve({expandKey:a,done:e.done}):Promise.resolve();const n=h.shift(),o=this._updateItemMetadata(n,s);if(this._pushItemToCache(o,s),this._isExpanded(o.metadata.key)){const e=this.getChildDataProvider(o.metadata.key);if(null!=e){const s=new this.FetchByOffsetParameters(this,0,this._getRemainingSize(i),t.sortCriteria,t.filterCriterion,t.attributes);return this._fetchChildrenByOffsetFromDataProvider(s,e,o.metadata.key,i,a).then(r.bind(this,new this.FetchByOffsetResults(this,t,h,!1)))}}return r(new this.FetchByOffsetResults(this,t,h,e.done))};return e.fetchByOffset(t).then(r).then(t=>{const e=this._getFetchByOffsetResultsFromCache(i);return t?{returnObject:t,fetchResult:e}:{fetchResult:e}})}_getRemainingSize(t){return-1===t.size?-1:t.size+t.offset-this._cache.length}_isExpanded(t){return this.options.expanded.has(t)}setExpanded(e){const s=this.createOptimizedKeySet(),i=this.createOptimizedKeySet();this._oldExpanded=this.options.expanded,this.options.expanded=e;const a=this._oldExpanded,r=this.options.expanded;if(r.isAddAll()||a.isAddAll()){if(!r.isAddAll()||!a.isAddAll())return this._clearCache(),this.dispatchEvent(new t.DataProviderRefreshEvent),void this.getExpandedObservable().next(this._getExpandedObservableValue(this.options.expanded,Promise.resolve()));{const t=r.deletedValues(),e=a.deletedValues();t.forEach(t=>{a.has(t)&&i.add(t)}),e.forEach(t=>{r.has(t)&&s.add(t)})}}else{const t=r.values(),e=a.values();t.forEach(t=>{a.has(t)||s.add(t)}),e.forEach(t=>{r.has(t)||i.add(t)})}const h=this._expand(s),n=this._collapse(i),o=new Promise(e=>{h.then(s=>{const i=s.operationAddEventDetail,a=s.fetchedCountMap;let r=null,h=null;if(-1!==this._fetchSize&&a.forEach((t,e)=>{const s=t.count;if(!t.done&&s>=this._fetchSize){const t=this._getItemIndexByKey(e);(t<h||null===h)&&(h=t,r=e)}}),null!==h){this._cache.splice(h+1,this._cache.length).forEach(()=>{this._decrementIteratorOffset(h+1)})}if(null===r){const e=new this.DataProviderMutationEventDetail(this,i,n,null);this.dispatchEvent(new t.DataProviderMutationEvent(e))}if(null!==r){const e=new t.DataProviderRefreshEvent(new this.DataProviderRefreshEventDetail(r));this.dispatchEvent(e)}e()})});this.getExpandedObservable().next(this._getExpandedObservableValue(this.options.expanded,o))}getExpandedObservable(){return this._expandedObservable}_pushItemToCache(t,e){const s=this._getLastItemByParentKey(e),i=null==s?this._getItemIndexByKey(e):this._getItemIndexByKey(s.metadata.key)+this._getLocalDescendentCount(s.metadata.key);this._cache.splice(i+1,0,t)}_spliceItemToCache(t,e){this._cache.splice(e+1,0,t)}_updateItemMetadata(t,e,s){let i=0;const a=this._getLastItemByParentKey(e);let r=null==a?0:a.metadata.indexFromParent+1;if(null!=s&&(r=s),null!=e){i=this._getItemByKey(e).metadata.treeDepth+1}return new this.Item(this,new this.FlattenedTreeItemMetadata(this,t.metadata.key,e,r,i,null===this.getChildDataProvider(t.metadata.key)),t.data)}_getItemByKey(e){let s=null;return this._cache.some(i=>{if(t.Object.compareValues(i.metadata.key,e))return s=i,!0}),s}_getItemIndexByKey(e){let s=-1;return this._cache.some((i,a)=>{if(t.Object.compareValues(i.metadata.key,e))return s=a,!0}),s}_getLastEntry(){return this._cache[this._getLastIndex()]}_getEntry(t){return this._cache[t]}_getLastItemByParentKey(e){let s=null;return this._cache.slice().reverse().some(i=>{if(t.Object.compareValues(i.metadata.parentKey,e))return s=i,!0}),s}_getLastIndex(){return this._cache.length-1}_getLocalDescendentCount(t){const e=this._getItemByKey(t);let s=0;if(null!=e){const i=this._getItemIndexByKey(t),a=e.metadata.treeDepth,r=this._getLastIndex();for(let t=i+1;t<=r;t++){if(!(this._getEntry(t).metadata.treeDepth>a))return s;s+=1}}return s}_expand(t){const e=[];return t.forEach(t=>{const s=new this.FetchByOffsetParameters(this,0,this._fetchSize,this._currentSortCriteria,this._currentFilterCriteria,null),i=this.getChildDataProvider(t);e.push(this._fetchChildrenByOffsetFromDataProvider(s,i,t,s,t))}),Promise.all(e).then(e=>{const s=this.createOptimizedKeySet(),i=this.createOptimizedKeySet(),a=[],r=[],h=[],n=new Map;return t.forEach(t=>{const o=this._getLocalDescendentCount(t);if(o>0){n.set(t,{count:o,done:!1});for(let s=0;s<e.length;s++)if(e[s].returnObject&&e[s].returnObject.expandKey===t&&e[s].returnObject.done){n.get(t).done=!0;break}const d=this._getItemIndexByKey(t)+1;let c=null;this._cache.slice(d,d+o).forEach((t,e)=>{s.add(t.metadata.key),i.add(c),a.push(t.metadata),r.push(t.data),h.push(d+e),c=t.metadata.key,this._incrementIteratorOffset(d)})}}),{operationAddEventDetail:new this.DataProviderAddOperationEventDetail(this,s,i,[],a,r,h),fetchedCountMap:n}})}_collapse(t){const e=[],s=[],i=[],a=this.createOptimizedKeySet();return t.forEach(t=>{const r=this._getLocalDescendentCount(t);if(r>0){const h=this._getItemIndexByKey(t);this._cache.splice(h+1,r).forEach((t,r)=>{a.add(t.metadata.key),e.push(t.metadata),s.push(t.data),i.push(h+r+1),this._decrementIteratorOffset(h+1)})}}),new this.DataProviderOperationEventDetail(this,a,e,s,i)}_decrementIteratorOffset(t){this._iterators.forEach((e,s)=>{t<e&&this._iterators.set(s,e-1)})}_incrementIteratorOffset(t){this._iterators.forEach((e,s)=>{t<e&&this._iterators.set(s,e+1)})}createOptimizedKeySet(t){return this.dataProvider.createOptimizedKeySet?this.dataProvider.createOptimizedKeySet(t):new e(t)}createOptimizedKeyMap(t){if(this.dataProvider.createOptimizedKeyMap)return this.dataProvider.createOptimizedKeyMap(t);if(t){const e=new r;return t.forEach((t,s)=>{e.set(s,t)}),e}return new r}}return t._registerLegacyNamespaceProp("FlattenedTreeDataProviderView",h),t.EventTargetMixin.applyMixin(h),h});
//# sourceMappingURL=ojflattenedtreedataproviderview.js.map