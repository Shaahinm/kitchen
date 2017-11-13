<template>
    <div class="section">
        <div class="box side">
            <create-recipe-sidebar></create-recipe-sidebar>
        </div>
        <div class="main">
            <div class="tabs is-large is-fullwidth is-centered" dir="ltr">
                <ul>      
                  <li><a>نمایش پایانی</a></li>
                  <li class="is-active"><router-link :to="{ name: 'edit-recipe-instruction', params: {id: this.localId}}" active-class="is-active" exact>دستور غذا</router-link></li>   
                  <li><router-link :to="{ name: 'edit-recipe-ingredients', params: {id: this.localId}}" active-class="is-active" exact>مواد اولیه</router-link></li>             
                  <li><router-link :to="{ name: 'edit-recipe-basic-info', params: {id: this.localId}}" active-class="is-active" exact>اطلاعات اولیه</router-link></li>             
                </ul>       
            </div>  
            <div class="box quill-editor-example">                
                <quill-editor ref="myTextEditor"
                            v-model="content"
                            :options="editorOption"
                            @blur="onEditorBlur($event)"
                            @focus="onEditorFocus($event)"
                            @ready="onEditorReady($event)">
                </quill-editor>
                <!-- <div class="html ql-editor" v-html="content"></div>                -->
            </div>
            <div class="field is-grouped" style="direction: rtl;">
                <div class="control">
                    <button @click="toggleModal()" class="button is-link">پیش نمایش</button>
                    <button @click="save()" class="button is-success">ذخیره</button>
                </div>                    
            </div>
        </div>
        <div class="modal" :class="{'modal': true, 'is-active': modalActive}">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <button @click="toggleModal()" class="delete" aria-label="close"></button>
                    <p class="modal-card-title">Modal title</p>                        
                </header>
                <section class="modal-card-body" v-html="content">                    
                </section>
                <footer class="modal-card-foot">
                    <button @click="toggleModal()" class="button is-success">بستن</button>                        
                </footer>
            </div>
        </div>
    </div>
</template>
<script>
import Quill from "quill";
import { ImageImport } from "quill/modules/ImageImport.js";
import { ImageResize } from "quill/modules/ImageResize.js";
import { recipeManager } from "@/utils/recipe-manager";
Quill.register("modules/imageImport", ImageImport);
Quill.register("modules/imageResize", ImageResize);
export default {
  name: "instruction",
  data() {
    return {
      name: "base-example",
      content: "",
      editorOption: {
        theme: "snow",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            // ['blockquote', 'code-block'],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            // [{ 'script': 'sub'}, { 'script': 'super' }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, false] }],
            // [{ 'color': [] }, { 'background': [] }],
            // [{ 'font': [] }],
            [{ align: [] }],
            ["clean"],
            ["link", "image"]
          ],
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: false
          },
          imageImport: true,
          imageResize: {
            displaySize: true
          }
        }
      },
      modalActive: false,
      localId: 0
    };
  },
  methods: {
    toggleModal() {
      this.modalActive = !this.modalActive;
    },
    onEditorBlur(editor) {
      // console.log("editor blur!", editor);
    },
    onEditorFocus(editor) {
      // console.log("editor focus!", editor);
    },
    onEditorReady(editor) {
      // console.log("editor ready!", editor);
    },
    save() {
      var currentKitchen = recipeManager.getParsedToken();
      var recipe = currentKitchen.recipes.find(e => e.localId == this.localId);
      recipe.instruction = this.content;
      recipeManager.setToken(currentKitchen);
      this.$toasted.global.success_toast();      
    },
    loadInstruction() {
      var currentKitchen = recipeManager.getParsedToken();
      var recipe = currentKitchen.recipes.find(e => e.localId == this.localId);
      this.content = recipe.instruction;
    }
  },
  computed: {
    editor() {
      return this.$refs.myTextEditor.quill;
    }
  },
  mounted() {
    this.localId = this.$route.params.id;
    this.loadInstruction();
  }
};
</script>
<style lang="scss" scoped>
.ql-container .ql-editor {
  min-height: 20em;
  padding-bottom: 1em;
  max-height: 25em;
}
.html {
  height: 9em;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-top: none;
  resize: vertical;
}
.main {
  direction: ltr;
}

.modal-card {
  width: calc(100vw - 40px);
}
</style>



